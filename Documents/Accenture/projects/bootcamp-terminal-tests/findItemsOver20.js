// This function takes an array of objects and returns an array of objects with quantity greater than 20
export default function findItemsOver20(objects){
    const ItemsOver20 = [];
  
    // Iterate through each object in the array
    for(let list of objects){
      // Check if the quantity of the object is greater than 20
      if(list.qty > 20){
        // If the condition is true, add the object to the ItemsOver20 array
        ItemsOver20.push({name: list.name, qty: list.qty});
      }
    }
  
    // Return the array of objects with quantity greater than 20
    return ItemsOver20;
  }
  