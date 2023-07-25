 
      module.exports = {
        preset: 'ts-jest',
        testEnvironment: 'node',
        testMatch: ['**/test/**/*.test.ts'],
        roots: ['./test'],
        moduleFileExtensions: ['ts'],
        modulePathIgnorePatterns: ['./node_modules'],
      };
