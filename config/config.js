var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'flash-ref'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/flash-ref-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'flash-ref'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/flash-ref-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'flash-ref'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/flash-ref-production'
  }
};

module.exports = config[env];
