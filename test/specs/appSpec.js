
import router from '../../src/js/router.js';
var assert = require('assert');
describe('Test index.html content', function() {
  describe('#indexOf()', function() {
    var title = 'Your name here';
    it('should containt ' + title, function() {
      var innerHTML = document.querySelector('#main').innerHTML;
      var a = innerHTML.indexOf(title);
      assert.notEqual(a,-1, "The index of '" + title+ "'  is -1 so not found in " + innerHTML );
    });
  });
});
