module.exports = {
  testEnvironment: 'miniflare',
  testMatch: ['**/*.test.ts', '**/test/*.ts'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testEnvironmentOptions: {
    bindings: { PRIVATE: 'test private', PUBLIC: 'test public' },
    kvNamespaces: ['API_KV'],
  },
};
