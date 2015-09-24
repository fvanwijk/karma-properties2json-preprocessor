var p2o = require('properties-parser');
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

    var result = JSON.stringify(p2o.parse(content));
    done(result);
  };
};

createProperties2JsonPreprocessor.$inject = ['logger', 'config.basePath', 'config.properties2JsonPreprocessor'];

module.exports = createProperties2JsonPreprocessor;
