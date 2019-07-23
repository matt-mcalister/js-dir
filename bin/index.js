#!/usr/bin/env node

const generate_js_dir = require('../') /* the current working directory so that means main.js because of package.json */
let dir_name = process.argv[2] ? process.argv[2] : "js-test-suite"
generate_js_dir(dir_name)
