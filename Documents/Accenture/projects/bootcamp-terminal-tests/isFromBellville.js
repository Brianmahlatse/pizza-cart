/*isFromBellville function returns true if a registration number is for Bellville otherwise returns false.
 Registration numbers for Bellville starts with CY.*/

 export default function isFromBellville(registrationNumber){
	return registrationNumber.startsWith('CY');
}

