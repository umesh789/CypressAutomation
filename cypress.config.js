const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
  projectId: 'jv5ky9',
    e2e: {
      baseUrl: 'https://opensource-demo.orangehrmlive.com',
      watchForFileChanges: false
    }
  },
);
