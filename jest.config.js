module.exports = {
  coverageDirectory: 'jest-coverage',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/assetsTransformer.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/src/setupTests.js'],
  testMatch: ['**/src/**/*.test.*'],
};
