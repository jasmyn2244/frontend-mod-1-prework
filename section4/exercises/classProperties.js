/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
/*
class Dog {
}
var jackRussellTerrier = new Dog();
var irishSetter = new Dog ();

console.log(jackRussellTerrier);
console.log(irishSetter);
*/
//Note to self: I have no idea if this is correct. No idea how this should run in the console.


// Prompt 2: Snack
/*
class Snack {}

var applesAndCheese = new Snack();
var celeryAndPeanutButter = new Snack();

console.log(applesAndCheese);
console.log(celeryAndPeanutButter);
*/

// Prompt 3: Shirt
/*
class Shirt {}

var tShirt = new Shirt();
var sweater = new Shirt ();
*/
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
/*
class Dog {
  constuctor() {
    this.breed = "Jack Russell Terrier";
    this.size = "15 lbs";
    this.cost = "$800";
  }
}

var jackRussellTerrier = new Dog ();
console.log(jackRussellTerrier);
*/

// Prompt 2: Snack
/*
class Snack {
  constructor() {
    this.ingredients = "Apples and Cheese"
    this.isHealthy = true;
    this.tastesGood = true;
  }
}

var applesAndCheese = new Snack()
console.log(applesAndCheese)
*/

// Prompt 3: Shirt

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor (breed, sizeInLbs, costInDollars) {
    this.breed = breed;
    this.size = sizeInLbs;
    this.cost = costInDollars
  }
}

var jackRussellTerrier = new Dog("Jack Russell Terrier", "15lbs", "$800");
var irishSetter = new Dog("Irish Setter", "75lbs", "$1500")

console.log(jackRussellTerrier);
console.log(irishSetter);

// Prompt 2: Snack
class Snack {
  constructor(ingredients, taste, healthiness) {
    this.ingredients = ingredients;
    this.tastesGood = taste;
    this.isHealthy = healthiness;
  }
}
var applesAndCheese = new Snack ("Apples and Cheese", "yes", "yes")
console.log(applesAndCheese);

var celeryAndPeanutButter = new Snack ("Celery and Peanut Buttter", "sometimes", "yes")
console.log(celeryAndPeanutButter);

// Prompt 3: Shirt
class Shirt {
  constructor(fabricType, size, machineWashable, type) {
    this.fabric = fabricType;
    this.shirtSize = size;
    this.isMachineWashable = machineWashable;
    this.type = type;
  }
}
var sweater = new Shirt("wool", "small", "no", "sweater")
console.log(sweater);

var tShirt = new Shirt("cotton", "x-large", "yes", "t-shirt")
console.log(tShirt);
