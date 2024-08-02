module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.ts$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  transformIgnorePatterns: ['<rootDir>/build/'],
};
