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

  indexjs = "function timesTwo(n){\n\treturn n * 2\n}\n\nexport {\n\ttimesTwo\n}"
  fs.writeFileSync(dir_name + "/src/index.js", indexjs)
  console.log(`GENERATED ${dir_name}/src/index.js`)

  fs.mkdirSync(dir_name + "/test")
  console.log(`GENERATED ${dir_name}/test`)

  specjs = "import { expect } from 'chai'\nimport { timesTwo } from '../src/index'\n\ndescribe('timesTwo function', () => {\n\tit('returns an integer twice the amount of its argument', () => {\n\t\texpect(timesTwo(5)).to.equal(10)\n\t})\n})"
  fs.writeFileSync(dir_name + "/test/index-spec.js", specjs)
  console.log(`GENERATED ${dir_name}/test/index-spec.js`)

  console.log("\n\n" + dir_name + "/ generation complete!")
  console.log("Now just `cd " + dir_name + " && npm install` and get coding!")
}
