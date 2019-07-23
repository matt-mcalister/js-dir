# JS Test Suite

This node package allows you to generate an extremely barebones javascript testing repository with babel, node and chai.

## Installation

Simply run `npm install -g js-test-suite`

## Usage

Once installed, run `js-test-suite NAME`, where `NAME` is the name of the repo you
would like to generate.

Here are the files that are generated when you run `js-test-suite blackjack`:

```
blackjack/
  ├── src/                      
  │   └── index.js            // this file contains an example function and is where you code should be written
  ├── test/
  │   └── spec_helper.rb      // this file contains one test as a template, using the example in src/index.js
  ├── .babelrc                  
  └── package.json            // included dependencies are chai, mocha, @babel/core, @babel/preset-env, and @babe/register.
```


## License

The node package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
