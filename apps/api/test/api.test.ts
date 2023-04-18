import { describe, expect, test } from 'vitest';
import api from '../src/index';
import type { PingResponse } from '../src/handlers/ping';
import { getTestEnvironment } from './testHelper';

const env = getTestEnvironment();

describe('A simple server test', () => {
  test('A named server test', async () => {
    await env.API_KV.put('ping', 'foo-test');
    const req = new Request('http://localhost/ping');
    const res = await api.fetch(req, env);
    const json = await res.json<PingResponse>();
    expect(json).toEqual({
      db: 'ok',
      foo: 3,
      kv: { ping: 'foo-test' },
      message: 'Hello, world!',
      // values from .vitest.config.ts in root dir
      private: 'this is test private',
      public: 'this is test public',
    });
  });
});
