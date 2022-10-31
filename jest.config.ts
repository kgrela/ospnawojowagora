import nextJest from 'next/jest';
import { Config } from '@jest/types';

const createJestConfig = nextJest({
  dir: './src',
});

const customJestConfig: Config.InitialOptions = {
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default createJestConfig(customJestConfig);
