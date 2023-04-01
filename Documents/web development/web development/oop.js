// Define an Animal constructor function
function Animal() { }

// Add an eat method to the Animal prototype
Animal.prototype = {
  constructor: Animal, // Make sure the constructor property is set correctly
  eat: function() {
    console.log("Marapo"); // Log a message to the console when eat is called
  }
};

// Define a Dog constructor function
function Dog() { }

// Set up the Dog prototype to inherit from Animal.prototype using Object.create
Dog.prototype = Object.create(Animal.prototype);

// Create a new instance of Dog called beagle
let beagle = new Dog();

// Call the eat method on the beagle object
beagle.eat(); // Output: "Marapo"




function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };
console.log(penguin.fly());

function Pekwa() { }
Pekwa.prototype = Object.create(Bird.prototype);
let pekwa = new Pekwa();

console.log(pekwa.fly());


/*Use a Mixin to Add Common Behavior Between Unrelated Objects

As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.*/

let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

//The flyMixin takes any object and gives it the fly method.

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

//Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can both fly:


/*The simplest way to make this public property private is by creating a variable within the constructor function. This changes the
 scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed 
 and changed by methods also within the constructor function.*/

function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

//Understand the Immediately Invoked Function Expression (IIFE)

//A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();


//An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. 
let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();


// Define a function called sumAll that takes an array as an argument
function sumAll(arr) {
    // Sort the array in ascending order using a compare function
    arr.sort(function(a, b) {
      return a - b;
    });
    
    // Initialize a variable called total to 0
    let total = 0;
    
    // Use a for loop to iterate over a range of numbers from the first element of the array to the second element of the array plus 1
    for (let num = arr[0]; num < arr[1] + 1; num++) {
      // Add each number in the range to the total
      total += num;
    }
    
    // Return the total
    return total;
  }
  
  // Call the sumAll function with an array containing the numbers 5 and 10, and log the result to the console
  console.log(sumAll([5, 10]));
  