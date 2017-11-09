const path = require('path');
const appDir = path.resolve(__dirname, '../', '');

module.exports = {
  appDir: appDir,
  srcDir: appDir + '/src',
  distDir: appDir + '/dist',
  publicDir: appDir + '/public'
};
