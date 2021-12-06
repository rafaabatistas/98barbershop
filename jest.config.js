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
    '~styles/(.*)': '<rootDir>/src/styles/$1',
    '~graphql/(.*)': '<rootDir>/src/graphql/$1',
    '~contexts/(.*)': '<rootDir>/src/contexts/$1',
    '~assets/(.*)': '<rootDir>/public/assets/$1',
    '~svg/(.*)': '<rootDir>/public/assets/svg/$1',
    '~img/(.*)': '<rootDir>/public/assets/img/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/styles/*.ts',
    '!src/types/*.ts',
    '!src/contexts/**',
    '!src/graphql/**',
    '!src/components/ui/atoms/Analytics/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testMatch: ['**/**/**/**/**/*.test.tsx'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  verbose: false
};
