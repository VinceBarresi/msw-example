const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3001',
    specPattern: './e2e/**/*.e2e.test.js',
    supportFile: false
  },
})

