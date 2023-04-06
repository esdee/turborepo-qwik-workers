module.exports = {
  testEnvironment: 'miniflare',
  testMatch: ['**/*.test.ts', '**/test/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
};
