// This function takes an array of objects and a threshold value and returns an array of objects with quantity greater than the threshold
export default function findItemsOver(objects, threshold){
  const ItemsOver = [];

  // Iterate through each object in the array
  for(let list of objects){
    // Check if the quantity of the object is greater than the threshold
    if(list.qty > threshold){
      // If the condition is true, add the object to the ItemsOver array
      ItemsOver.push({name: list.name, qty: list.qty});
    }
  }

  // Return the array of objects with quantity greater than the threshold
  return ItemsOver;
}
