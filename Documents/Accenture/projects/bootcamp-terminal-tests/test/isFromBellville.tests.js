import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe("Testing isFromBellville function",function() {
    function generateRegistrationNumber() {
        var provinceCodes = ['GP','CA','LP','CY','CY','CY','CY','CY','MP','CF', 'NW', 'NC', 'WC','CK', 'EC','CJ', 'FS', 'KZN'];
        var randomProvinceCode = provinceCodes[Math.floor(Math.random() * provinceCodes.length)];
        var randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return [randomProvinceCode + ' ' + randomNumber,  randomNumber + ' ' +randomProvinceCode];
      }
    // Define test data array
    const testData=[]
    for(let i=0;i<10;i++){
        const regNum=generateRegistrationNumber()[Math.floor(Math.random()*2)];
        testData.push( {"reg":regNum,"truth":regNum.startsWith("CY")});
    }
    
    testData.forEach(function(data){
        it(`For registration ${data.reg} we expect ${data.truth}`,function(){
            assert.equal(isFromBellville(data.reg),data.truth)
        })
    })
    
   
})