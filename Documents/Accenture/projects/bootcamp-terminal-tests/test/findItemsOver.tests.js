import assert from 'assert';
import findItemsOver from '../findItemsOver.js';
describe('Testing findItemsOver function', function() {
    var itemList = [
      { name: 'apples', qty: 10 },
      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
      { name: 'apples', qty: 3 },
    ];
  
    var results = [
      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
    ];
  
    var itemList2 = [
      { name: 'apples', qty: 10 },
      { name: 'pears', qty: 19 },
      { name: 'bananas', qty: 17 },
      { name: 'apples', qty: 3 },
    ];
  
    var results2 = [];
  
    var itemList3 = [
      { name: 'apples', qty: 40 },
      { name: 'pears', qty: 20 },
      { name: 'bananas', qty: 23 },
      { name: 'apples', qty: 37 },
    ];
  
    var results3 = [
      { name: 'apples', qty: 40 },
      { name: 'bananas', qty: 23 },
      { name: 'apples', qty: 37 },
    ];
  
    it('should return items with quantity over 20', function() {
      assert.deepEqual(findItemsOver(itemList, 20), results);
    });
  
    it('should return an empty array when no items have quantity over 20', function() {
      assert.deepEqual(findItemsOver(itemList2, 20), results2);
    });
  
    it('should return all items when all items have quantity over 20', function() {
      assert.deepEqual(findItemsOver(itemList3, 20), results3);
    });
  
    it('should return items with quantity over 30', function() {
      var threshold = 30;
      var expectedResults = [
        { name: 'pears', qty: 37 },
      ];
      assert.deepEqual(findItemsOver(itemList, threshold), expectedResults);
    });
  
    it('should return an empty array when no items have quantity over 40', function() {
      var threshold = 40;
      var expectedResults = [];
      assert.deepEqual(findItemsOver(itemList2, threshold), expectedResults);
    });
  
    it('should return all items when all items have quantity over 10', function() {
      var threshold = 10;
      var expectedResults = [
            { name: 'apples', qty: 40 },
            { name: 'pears', qty: 20 },
            { name: 'bananas', qty: 23 },
            { name: 'apples', qty: 37 },
        ];
      assert.deepEqual(findItemsOver(itemList3, threshold), expectedResults);
    });
  });
  