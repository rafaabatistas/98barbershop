module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  modulePathIgnorePatterns: ['<rootDir>/src/pages', '<rootDir>/src/styles'],
  moduleNameMapper: {
    '~src/(.*)': '<rootDir>/src/$1',
    '~components/(.*)': '<rootDir>/src/components/$1',
    '~organisms/(.*)': '<rootDir>/src/components/ui/organisms/$1',
    '~molecules/(.*)': '<rootDir>/src/components/ui/molecules/$1',
    '~atoms/(.*)': '<rootDir>/src/components/ui/atoms/$1',
    '~foundations/(.*)': '<rootDir>/src/foundations/$1',
    '~assets/(.*)': '<rootDir>/public/assets/$1',
    '~svg/(.*)': '<rootDir>/public/assets/svg/$1',
    '~img/(.*)': '<rootDir>/public/assets/img/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['**/*.test.tsx', '**/*/*.test.tsx', '**/*/*/*.test.tsx'],
  modulePaths: ['<rootDir>/src/']
};
