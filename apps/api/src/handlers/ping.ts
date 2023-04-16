import type { Context } from 'hono';
import { Bindings } from '../bindings';
import { dateUtils } from 'utils';
import { pingData } from 'data';

export type PingResponse = {
  foo: number;
  kv: { ping: string };
  db: string;
  message: string;
  private: string;
  public: string;
};

export async function handler(
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
