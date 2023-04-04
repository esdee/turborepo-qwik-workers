import api from '../src/index';
import type { PingResponse } from '../src/index';

const env = getMiniflareBindings();

describe('A first test', () => {
  test('A named test', () => {
    expect(1).toBe(1);
  });
});

describe('A simple server test', () => {
  test('A named server test', async () => {
    await env.API_KV.put('ping', 'foo-test');
    const req = new Request('http://localhost/ping');
    const res = await api.fetch(req, env);
    const json = await res.json<PingResponse>();
    expect(json).toEqual({
      foo: 3,
      kv: { ping: 'foo-test' },
      message: 'Hello, world!',
      private: 'test private',
      public: 'test public',
    });
  });
});
