const babel = require('babel');

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/*.js', load: false }
    ],

    tests: [
      { pattern: 'test/*.spec.js', load: false }
    ],

    testFramework: 'mocha',

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel,
        stage: 0
      })
    }
  };
};
