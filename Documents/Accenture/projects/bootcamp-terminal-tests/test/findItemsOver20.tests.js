import assert from 'assert';
import findItemsOver20 from '../findItemsOver20.js';

describe('Testing findItemsOver20 function', function() {
    const itemList = [
      { name: 'apples', qty: 10 },
      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
      { name: 'apples', qty: 3 },
    ];
  
    const results = [
      { name: 'pears', qty: 37 },
      { name: 'bananas', qty: 27 },
    ];
  
    const itemList2 = [
      { name: 'apples', qty: 10 },
      { name: 'pears', qty: 19 },
      { name: 'bananas', qty: 17 },
      { name: 'apples', qty: 3 },
    ];
  
    const results2 = [];
  
    const itemList3 = [
      { name: 'apples', qty: 40 },
      { name: 'pears', qty: 20 },
      { name: 'bananas', qty: 23 },
      { name: 'apples', qty: 37 },
    ];
  
    const results3 = [
      { name: 'apples', qty: 40 },
      { name: 'bananas', qty: 23 },
      { name: 'apples', qty: 37 },
    ];
  
    it('should return items with quantity over 20', () => {
      const actualResults = findItemsOver20(itemList);
      assert.deepEqual(actualResults, results);
    });
  
    it('should return an empty array when no items have quantity over 20', () => {
      const actualResults = findItemsOver20(itemList2);
      assert.deepEqual(actualResults, results2);
    });
  
    it('should return all items when all items have quantity over 20', () => {
      const actualResults = findItemsOver20(itemList3);
      assert.deepEqual(actualResults, results3);
    });
  
    it('should return an empty array when no items are provided', () => {
      const actualResults = findItemsOver20([]);
      assert.deepEqual(actualResults, []);
    });
  });
  