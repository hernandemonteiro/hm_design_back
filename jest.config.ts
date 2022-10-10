export default {
  testEnvironment: "node",
  automock: false,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: ["**.unit.ts", "**.integration.ts"],
};
