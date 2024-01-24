module.exports = {
  bail: 5,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['html'],
  moduleNameMapper: {
    '\\.(wav|mp3|m4a|aac|oga)$': '<rootDir>/src/assets/audio/__tests__/audio.mock.ts',
    '\\.(eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/src/assets/fonts/__tests__/font.mock.ts',
    '\\.(jpg|ico|jpeg|png|gif)$': '<rootDir>/src/assets/images/__tests__/image.mock.ts',
    '\\.(css|less)$': '<rootDir>/src/assets/styles/__tests__/style.mock.ts',
    '\\.(mp4|webm)$': '<rootDir>/src/assets/videos/__tests__/video.mock.ts'
  },
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', "./jest/setup.js"],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  verbose: true
}
