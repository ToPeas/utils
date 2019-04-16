module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  // https://github.com/facebook/jest/issues/6229#issuecomment-450280779 解决了jest测试的不能使用es6的import语法问题
  env: {
    test: {
      presets: [['@babel/preset-env']]
    }
  }
}
