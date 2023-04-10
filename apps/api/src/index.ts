import { Hono } from 'hono';
import type { Context } from 'hono';
import { Bindings } from './bindings';
import { cors } from 'hono/cors';
import { dateUtils } from 'utils';
import { pingData } from 'data';

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const api = new Hono<{ Bindings: Bindings }>();
api.use('/*', cors());

export type PingResponse = {
  foo: number;
  kv: { ping: string };
  db: string;
  message: string;
  private: string;
  public: string;
};

async function pingHandler(
  c: Context<{ Bindings: Bindings }>
): Promise<PingResponse> {
  const k = await c.env.API_KV.get('ping');
  const dbResponse = await pingData.ping(c.env.API_DB);
  const tf = dateUtils.foo(1);
  return {
    db: dbResponse,
    foo: tf,
    kv: { ping: k || '' },
    message: 'Hello, world!',
    private: c.env.PRIVATE,
    public: c.env.PUBLIC,
  };
}

api.get('/ping', async (c) => {
  const pingResponse = await pingHandler(c);
  return c.json(pingResponse, 200);
});

export default api;
