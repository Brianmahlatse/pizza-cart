/**
 * Determines the town of origin based on a car registration number.
 * @param {string} registrationNumber - The car registration number.
 * @returns {string} - The town of origin for the car.
 */
export default function fromWhere(registrationNumber) {
    if (registrationNumber.startsWith('CY')) {
      return 'Bellville';
    } else if (registrationNumber.startsWith('CJ')) {
      return 'Paarl';
    } else if (registrationNumber.startsWith('CA')) {
      return 'Cape Town';
    } else {
      return 'Some other place!';
    }
  }
  