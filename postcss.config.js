module.exports = {
    plugins: [
      require('postcss-import'),
      require('precss'),
      require('cssnano'),
      require('postcss-preset-env')({ stage: 0 })
    ]
  }
  