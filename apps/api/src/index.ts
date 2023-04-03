import { Hono } from 'hono';
import { Bindings } from './bindings';
import { cors } from 'hono/cors';

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

api.get('/ping', async (c) => {
  const k = await c.env.API_KV.get('ping');
  const dbRows = await c.env.API_DB.prepare(
    'SELECT date() as date, time() as time; '
  ).first();
  return c.json(
    {
      message: 'Hello, world!',
      public: c.env.PUBLIC,
      private: c.env.PRIVATE,
      kv: { ping: k },
      db: dbRows,
    },
    200
  );
});

export default api;
