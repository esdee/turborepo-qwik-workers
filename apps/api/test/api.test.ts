import api from '../src/index';
import type { Bindings } from '../src/bindings';
import type { PingResponse } from '../src/index';

const env = getMiniflareBindings();

describe('A first test', () => {
  test('A named test', () => {
    expect(1).toBe(1);
  });
});

describe('A simple server test', () => {
  test('A named server test', async () => {
    const req = new Request('http://localhost/ping');
    const env: Bindings = { PUBLIC: 'test public', PRIVATE: 'test private' };
    const res = await api.fetch(req, env);
    const json = await res.json<PingResponse>();
    expect(json).toEqual({
      foo: 3,
      message: 'Hello, world!',
      private: 'test private',
      public: 'test public',
    });
  });
});
