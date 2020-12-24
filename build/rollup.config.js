const path = require("path");

import json from "rollup-plugin-json";
import typescript from 'rollup-plugin-typescript';

export default {
  input: "src/index.js",
  output: {
    file: `js/haorooms.aa.js`,
    format: "umd",
    name: "haorooms",
  },
  plugins: [json(), typescript()],
};
