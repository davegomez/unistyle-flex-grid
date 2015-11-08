const babel = require('babel');

module.exports = wallaby => {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'test/**/*.spec.js'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'mocha',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel,
        stage: 0
      })
    },

    bootstrap: function (w) {
      const mocha = w.testFramework;
      mocha.ui('tdd');
    }
  };
};
