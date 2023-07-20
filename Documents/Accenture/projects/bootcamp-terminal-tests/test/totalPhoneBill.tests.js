import assert from 'assert';
import totalPhoneBill from '../totalPhoneBill.js';
describe('Test totalPhoneBill function', function() {

    // Helper function to generate random combination of calls and SMS
    function generateSmsCalls() {
      let callSms = [' call ', ' sms '];
      const numberOfCallsMadeAndSmsSent = Math.floor(Math.random() * 30);
      let callsMadeAndSmsSent = callSms[Math.floor(Math.random() * callSms.length)];
  
      // Generate a random combination of calls and SMS
      for (let i = 1; i < numberOfCallsMadeAndSmsSent; i++) {
        callsMadeAndSmsSent += ',' + callSms[Math.floor(Math.random() * callSms.length)];
      }
  
      return callsMadeAndSmsSent.trim();
    }
  
    // Initialize variables
    let pricePerCall = 2.75;
    let pricePerSms = 0.65;
    let callsMadeAndSmsSent;
    let callsMadeAndSmsSentData;
    let testData = [];
  
    // Generate test data
    for (let i = 0; i < 10; i++) {
      callsMadeAndSmsSentData = generateSmsCalls();
      callsMadeAndSmsSent = callsMadeAndSmsSentData.split(',');
  
      // Count the number of calls and SMS in the generated data
      const numberOfCalls = callsMadeAndSmsSent.filter(data => data.trim() === 'call').length;
      const numberOfSmss = callsMadeAndSmsSent.filter(data => data.trim() === 'sms').length;
  
      // Calculate the total bill based on the number of calls and SMS
      const totalBill = numberOfCalls * pricePerCall + numberOfSmss * pricePerSms;
  
      testData.push({
        "callsMadeAndSmsSent": callsMadeAndSmsSentData,
        "totalBill": 'R' + totalBill.toFixed(2)
      });
    }
  
    // Iterate through test data and run tests
    testData.forEach(function(data) {
      it(`For '${data.callsMadeAndSmsSent}', we expect ${data.totalBill}`, function() {
        assert.equal(totalPhoneBill(data.callsMadeAndSmsSent), data.totalBill);
      });
    });
  
  });
  