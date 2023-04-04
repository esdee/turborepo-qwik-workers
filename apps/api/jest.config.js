module.exports = {
  testEnvironment: 'miniflare',
  testMatch: ['**/*.test.ts', '**/test/*.ts'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
};
