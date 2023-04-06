module.exports = {
  testEnvironment: 'miniflare',
  testMatch: ['**/*.test.ts', '**/test/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testEnvironmentOptions: {
    d1Databases: ['__D1_BETA__TEST_DB'],
    d1Persist: true,
  },
};
