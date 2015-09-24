var p2list = require('properties-parser');
var p2tree = require('java.properties.js').default;
var path = require('path');

var createProperties2JsonPreprocessor = function(logger, basePath, config) {
  var log = logger.create('preprocessor.properties2json');
  config = typeof config === 'object' ? config : {};

  var distPath = config.dist || 'spec/javascripts/fixtures/json/';

  return function (content, file, done) {

    log.debug('Processing "%s".', file.originalPath);

    var fileName = path.basename(file.originalPath).replace(/\.[^/.]+$/, "");

    file.path = path.normalize(basePath + '/' + distPath + '/' + fileName + '.json');

    log.debug('Saving to "%s".', file.path);

    var content = config.tree ? p2tree(content) : p2list.parse(content);
    var result = JSON.stringify(content);

    done(result);
  };
};

createProperties2JsonPreprocessor.$inject = ['logger', 'config.basePath', 'config.properties2JsonPreprocessor'];

module.exports = createProperties2JsonPreprocessor;
