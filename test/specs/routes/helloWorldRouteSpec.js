import React from 'react';
import { renderToString } from 'react-dom/server';
import HelloWorldRoute from '../../../src/js/routes/helloWorldRoute';
var assert = require('assert');
describe('Test Hello World Component', function () {
  describe('#indexOf()', function () {
    var helloWorld = 'Hello, World!';
    it('should containt ' + helloWorld, function () {

      var helloWorldRendered = renderToString(HelloWorldRoute)
      var a = helloWorldRendered.indexOf(helloWorld);
      assert.notEqual(a, -1, "The index of '" + helloWorld + "'  is -1 so not found in " + helloWorldRendered);
    });
  });
});


