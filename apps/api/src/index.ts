import { Hono } from 'hono';
import type { Context } from 'hono';
import { Bindings } from './bindings';
// import { cors } from 'hono/cors';
import { dateUtils } from 'utils';
// import { pingData } from 'data';

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

export type PingResponse = {
  message: string;
  public: string;
  private: string;
  foo: number;
};

async function pingHandler(
  c: Context<{ Bindings: Bindings }>
): Promise<PingResponse> {
  const tf = dateUtils.foo(1);
  return {
    message: 'Hello, world!',
    public: c.env.PUBLIC,
    private: c.env.PRIVATE,
    //   kv: { ping: k },
    //   db: `${dbRow.date} ${dbRow.time}}`,
    foo: tf,
  };
}

api.get('/ping', async (c) => {
  //  const k = await c.env.API_KV.get('ping');
  //  const dbRow = await pingData.foo(c.env.API_DB);
  const pingResponse = await pingHandler(c);
  return c.json(pingResponse, 200);
});

export default api;
