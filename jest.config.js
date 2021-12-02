/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: "node",
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  verbose: false,
  collectCoverageFrom: ["**/*.(t|j)s", "!**/node_modules/**"],
  coverageDirectory: "./coverage",
  coverageReporters: ["json", "json-summary", "lcov", "html"],
};
