import assert from 'assert';
import regCheck from '../regCheck.js';
  
  describe('Testing regCheck function', function() {
  
    // Helper function to generate random registration number and province code
    function registrationNumberProvinceCode() {
      const provinceCodes = ['CA', 'CY', 'CF', 'NW', 'NC', 'WC', 'CK', 'CJ', 'FS', 'KZN'];
      const validProvinceCodes = ["GP", "L", "EC", "MP"];
  
      // Generate random province code and registration number
      const randomProvinceCodeOne = provinceCodes[Math.floor(Math.random() * provinceCodes.length)];
      const randomProvinceCodeTwo = validProvinceCodes[Math.floor(Math.random() * validProvinceCodes.length)];
      const randomProvinceCode = [randomProvinceCodeOne, randomProvinceCodeTwo][Math.floor(Math.random() * 2)];
      const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      const registrationNumber = [randomProvinceCode + ' ' + randomNumber, randomNumber + ' ' + randomProvinceCode][Math.floor(Math.random() * 2)];
  
      // Generate random province code for comparison
      const provinceCode = validProvinceCodes[Math.floor(Math.random() * validProvinceCodes.length)];
  
      return { "registrationNumber": registrationNumber, "provinceCode": provinceCode };
    }
  
    // Define test data array
    let testData = [];
    for (let i = 0; i < 5; i++) {
      const regData = registrationNumberProvinceCode();
      const truth = regData["registrationNumber"].endsWith(regData["provinceCode"]);
      regData["truth"] = truth;
      testData.push(regData);
    }
  
    // Iterate through test data and run tests
    testData.forEach(function(data) {
      it(`For registration ${data.registrationNumber} and province code ${data.provinceCode}, we expect ${data.truth}`, function() {
        assert.equal(regCheck(data.registrationNumber, data.provinceCode), data.truth);
      });
    });
  
  });
  