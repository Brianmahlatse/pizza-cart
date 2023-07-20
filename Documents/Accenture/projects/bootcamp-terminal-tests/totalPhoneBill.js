/*
Function takes in a string calls made and sms's sent.
Calculate the total bill for the data provided.

In the string 'call, sms, call, sms, sms' there are 2 calls and 3 sms's.

The cost is:
    R2.75 per call
    R0.65 per sms.

For the string above totalPhoneBill should return R7.45
*/

export default function totalPhoneBill(callsMadeAndSmsSent) {
    // Split the input string into an array of tasks
    callsMadeAndSmsSent = callsMadeAndSmsSent.split(',');
  
    // Initialize variables
    let totalBill = 0;
    let task;
    let pricePerCall = 2.75;
    let pricePerSms = 0.65;
  
    // Iterate through each task in the array
    for (let i = 0; i < callsMadeAndSmsSent.length; i++) {
      task = callsMadeAndSmsSent[i].trim();
      switch (task) {
        case 'sms':
          // Add the price of an SMS to the total bill
          totalBill += pricePerSms;
          break;
        case 'call':
          // Add the price of a call to the total bill
          totalBill += pricePerCall;
          break;
      }
    }
    // Format the total bill as a string with R currency symbol and 2 decimal places
    return 'R' + totalBill.toFixed(2);
  }
  
  
