module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  testMatch: [
    '<rootDir>/(test/unit/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  "transformIgnorePatterns": [
    // Change MODULE_NAME_HERE to your module that isn't being compiled
    "/node_modules/(?!MODULE_NAME_HERE).+\\.js$"
  ]
}
