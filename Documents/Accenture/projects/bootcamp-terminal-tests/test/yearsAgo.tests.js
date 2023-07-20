import assert from 'assert';
import yearsAgo from '../yearsAgo.js';
describe('Testing yearsAgo function', function() {
    const currentYear = new Date().getFullYear();
    it('should return the correct number of years ago from the current year', () =>
      assert.equal(currentYear - 2000, yearsAgo(2000))
      );
  
    it('should return 0 when the input year is the current year', ()=>
      assert.equal(0, yearsAgo(currentYear))
    );
  
    const testData=['invalid',null,undefined,true];
    it('should return NaN for invalid input', function() {
      testData.forEach(data=>{

      const result = yearsAgo(data);
      assert.strictEqual(isNaN(result), true);
      })
      

    });
  });
  