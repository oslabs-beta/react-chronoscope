module.exports = {
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    'raf/polyfill',
  ],
  testRegex: '/__tests__/.*\\.(ts|tsx|js)$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setupEnzyme.ts'],
};
