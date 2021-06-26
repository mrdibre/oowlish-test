module.exports = {
  roots: ["<rootDir>/src"],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^(data|domain|factories|infra|presentation|ui)(.*)$":
      "<rootDir>/src/$1/$2",
  },
};
