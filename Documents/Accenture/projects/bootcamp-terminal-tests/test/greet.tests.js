import assert from 'assert';
import greet from '../greet.js';

describe('test greet function', function() {
    // Define test data array
    var testData = [
      { name: 'Brian', expected: 'Hello, Brian' },
      { name: 'Alice', expected: 'Hello, Alice' },
      { name: 'John', expected: 'Hello, John' }
      // Add more test data as needed
    ];
  
    // Iterate over test data and create a test case for each entry
    testData.forEach(function(data) {
      it(`should greet ${data.name}`, function() {
        assert.equal(greet(data.name), data.expected);
      });
    });
  });
  