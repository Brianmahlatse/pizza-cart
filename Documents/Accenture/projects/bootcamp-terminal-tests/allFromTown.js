/**
 * Returns an array of registration numbers that belong to a specific town.
 * 
 * @param {string} registrationNumbers - A string containing registration numbers separated by commas.
 * @param {string} townIndicator - The indicator string that identifies the desired town.
 * @returns {string[]} - An array of registration numbers for the specified town.
 */

export default function allFromTown(registrationNumbers, townIndicator) {
    const townRegistrationNumbers = []; // Array to store registration numbers for the specified town
    registrationNumbers = registrationNumbers.split(','); // Split the input string into an array of registration numbers
    
    for (let i = 0; i < registrationNumbers.length; i++) {
      const regNum = registrationNumbers[i].trim(); // Trim any leading or trailing spaces from the registration number
      if ((regNum.startsWith(townIndicator) || regNum.endsWith(townIndicator)) && regNum.length > 2) {
        // Check if the registration number has the specified town indicator at the beginning or end, and ensure it's longer than 2 characters
        townRegistrationNumbers.push(regNum); // Add the registration number to the townRegistrationNumbers array
      }
    }
    
    return townRegistrationNumbers; // Return the array of registration numbers for the specified town
  }

  
 
  