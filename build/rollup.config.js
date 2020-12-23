const path = require('path')

import json from 'rollup-plugin-json';

export default {
    input: "src/index.js",
    output: {
        file: (`js/haorooms.aa.js`),
        format: "umd",
        name: 'haorooms'
      },
    plugins: [ json() ]
}