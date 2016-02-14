# Karma properties2JSON preprocessor

Preprocessor for converting .properties files into JSON files.

[![devDependency Status](https://david-dm.org/fvanwijk/karma-properties2json-preprocessor/dev-status.svg)](https://david-dm.org/fvanwijk/karma-properties2json-preprocessor#info=devDependencies)
[![Dependency Status](https://david-dm.org/fvanwijk/karma-properties2json-preprocessor.svg)](https://david-dm.org/fvanwijk/mox)

## Usage

`npm install --save-dev karma-properties2json-preprocessor`

In your Karma config file add the preprocessor:

```javascript
preprocessors: {
  'test.properties': 'properties2json'
}
```

The following configuration is supported:

```javascript
properties2JsonPreprocessor: {
  dist: 'test/mock/json/',
  tree: true
}
```

Set the `dist` option to the directory where Karma should serve the output. Default is 'spec/javascripts/fixtures/json/'
which is the same default path as jasmine-jquery uses for reading JSON fixtures.

If `tree` is true, the keys in the properties are outputted as a JSON tree, delimited by colons instead of key/value pairs.

```
// test.properties
parent.childA=value1
parent.childB=value2

// test.json
{
  "parent": {
    "childA": "value1",
    "childB": "value2"
  }
}
```
