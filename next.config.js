/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
require('dotenv').config()
const path = require('path')

module.exports = {
  env: {
    MICROCMS_KEY: process.env.MICROCMS_KEY
  },
  webpack(cfg) {
    cfg.resolve.alias = {
      ...cfg.resolve.alias,
      '~': path.resolve(__dirname, './src')
    }
    return cfg
  }
}
