import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'miniflare',
    // Configuration is automatically loaded from `.env`, `package.json` and
    // `wrangler.toml` files by default, but you can pass any additional Miniflare
    // API options here:
    environmentOptions: {
      bindings: {
        PUBLIC: 'this is test public',
        PRIVATE: 'this is test private',
      },
      kvNamespaces: ['API_KV_TEST'],
      kvPersist: true,
      d1Databases: ['__D1_BETA__API_DB'],
      d1Persist: true,
    },
  },
});
