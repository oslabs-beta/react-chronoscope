module.exports = {
  transform: {
    '\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>node_modules/(?!(jest-runtime)/)',
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
    'ts-jest': {
      diagnostics: false,
    },
  },
};
