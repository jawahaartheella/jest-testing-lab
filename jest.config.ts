import type {Config} from 'jest';

const config: Config = {
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: "node"
};

export default config;
