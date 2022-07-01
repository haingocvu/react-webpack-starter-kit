// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
