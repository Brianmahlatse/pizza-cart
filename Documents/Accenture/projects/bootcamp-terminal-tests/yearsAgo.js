/*
   Function takes in a year and returns how many years ago that year is from the current year.
   @param {number} year - The year to calculate the number of years ago from the current year.
   @returns {number} - The number of years ago from the current year.
*/
export default function yearsAgo(year) {
    const currentYear = new Date().getFullYear();
    if(typeof year==='number'&& year<=currentYear){
        return currentYear - year;
    }
    
  }
  
  console.log(yearsAgo(true));
  console.log(yearsAgo('invalid'));
  console.log(yearsAgo(null));
  console.log(undefined);

  
