module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.test.ts"],  // Look for test files under 'tests'
    transform: {
      "^.+\\.ts$": "ts-jest", // Handle TypeScript with ts-jest
    },
    setupFilesAfterEnv: ["<rootDir>/src/tests/setup.ts"],
  };