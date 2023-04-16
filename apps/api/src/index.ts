import { Hono } from 'hono';
import { Bindings } from './bindings';
import { cors } from 'hono/cors';
import { handler as pingHandler } from './handlers/ping';

const api = new Hono<{ Bindings: Bindings }>();
api.use('/*', cors());

api.get('/ping', async (c) => {
  const pingResponse = await pingHandler(c);
  return c.json(pingResponse, 200);
});

const trpcPingRoute = api.get('/trpc', async (c) => {
  const pingResponse = await pingHandler(c);
  return c.jsonT(pingResponse, 200);
});

export default api;
export type PingRoute = typeof trpcPingRoute;
