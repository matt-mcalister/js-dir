const fs = require('fs')

module.exports = function(dir_name) {
  fs.mkdirSync(dir_name)
  console.log(`GENERATED ${dir_name}/`)

  package_json = {
    "name": "js-test-suite",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "mocha --compilers js:@babel/register"
    },
    "license": "ISC",
    "devDependencies": {
      "@babel/core": "^7.1.2",
      "@babel/preset-env": "^7.1.0",
      "@babel/register": "^7.0.0",
      "chai": "^4.2.0",
      "mocha": "^5.2.0"
    }
  }
  fs.writeFileSync(dir_name + "/package.json", JSON.stringify(package_json, null, 3))
  console.log(`GENERATED ${dir_name}/package.json`)
  babelrc = {
    "presets": ["@babel/preset-env"]
  }
  fs.writeFileSync(dir_name + "/.babelrc", JSON.stringify(babelrc, null, 2))
  console.log(`GENERATED ${dir_name}/.babelrc`)
  fs.mkdirSync(dir_name + "/src")
  console.log(`GENERATED ${dir_name}/src`)
  fs.mkdirSync(dir_name + "/test")
  console.log(`GENERATED ${dir_name}/test`)
}
