// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) { //create a function with dynamic perameters
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;//define variable which is assigned to a string that concatonates with the perameter name
  var demographics = [name, age]; //assign variable to an array which contains two dynamic perameters
  var powerSaying = "Did you know that I can " + specialPower + " ?"; //assign variable to a string that concatonates wtih specialPower perameter
  var builtBear = { // this variable contains and object with key/value pairs
    basicInfo: demographics, //key/value pair where value is a variable from above
    clothes: clothes,//key/value pair where the value is a dynamic perameter
    exterior: fur,//key/value pair ''
    cost: 49.99,//key/value pair where key is assigned a value
    sayings: [greeting, powerSaying, "Goodnight my friend!"], // this value is an array
    isCuddly: true, // this value is a boolean value
  };

  return builtBear //we are calling the object built bear????
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');//here we are adding specific arguments
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in'); //this another instance of the bear with different arguments



// //FizzBuzz
function fizzBuzz(num1, num2, range) { //we are declaring a function with 3 dynamic perameters
  for (var i = 0; i <= range; i++) { //we are starting a for loop that will add 1 as long as the number is less than range
    if (i % num1 === 0 && i % num2 === 0) { // now we are creating a conditional where instead of printing i, the computer logs "fizzbuzz" for even numbers
      console.log('fizzbuzz'); // see above
    } else if (i % num1 === 0) { //if i is the modulo with num1 then, it prints fizz
      console.log('fizz');
    } else if (i % num2 === 0) {// if i is the modulo with num2 only, then it prints buzz
      console.log('buzz');
    } else {
      console.log(i); // if i does not modulo into num1 or num2, it just prints i
    }
  }
}
//
fizzBuzz(3, 5, 100);//This is how we submit arguments for the perameters
fizzbuzz(5, 8, 400); // same
