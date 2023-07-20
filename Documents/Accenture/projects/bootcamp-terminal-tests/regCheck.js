/* regCheck function check if a registration number is for GP, L, EC, MP registration plates.*/
export default function regCheck(regNum,loc){
    return regNum.endsWith(loc);
      }