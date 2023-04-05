module.exports = {
  testEnvironment: 'miniflare',
  testMatch: ['**/*.test.ts', '**/test/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testEnvironmentOptions: {
    bindings: { PRIVATE: 'test private', PUBLIC: 'test public' },
    kvNamespaces: ['API_KV'],
    kvPersist: true,
    d1Databases: ['__D1_BETA__API_DB'],
    d1Persist: true,
  },
};
