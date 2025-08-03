import type { Config } from 'jest';
import { createCjsPreset } from 'jest-preset-angular/presets';
/** @type {import("jest").Config} **/
module.exports = {
  preset: 'jest-preset-angular',
  coverageDirectory: '../coverage/',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
  },
  rootDir: '.',
  ...createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
} satisfies Config;
