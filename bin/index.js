#!/usr/bin/env node

const generate_js_dir = require('../')
let dir_name = process.argv[2] ? process.argv[2] : "js-test-suite"
generate_js_dir(dir_name)
