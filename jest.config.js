module.exports = {
  transform: {
    '\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    // required so jest doesn't throw error while importing min.css from timeline
    '\\.(css|less)$': '<rootDir>/src/styles/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/(build|docs|node_modules)/',
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    'raf/polyfill',
  ],
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupEnzyme.tsx'],
  globals: {
    chrome: {},
    'ts-jest': {
      diagnostics: false,
    },
  },
};
