module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.test.ts"],  // Look for test files under root 'tests'
    transform: {
      "^.+\\.ts$": "ts-jest", // Handle TypeScript with ts-jest
    },
    setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
    moduleDirectories: ["node_modules", "src"]
  };