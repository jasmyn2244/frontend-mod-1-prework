/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};//I thought that functions shouldn't have a semi-colon after them?

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello!");
};

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log("Hello" + " " + name);
}

greetMe('Jasmyn')
greetMe('Justin')

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function showSum(num1, num2) {
  console.log(num1 + num2)
}
showSum(2, 3)
showSum (20, 22)
showSum (9, 1)

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function speakTruth(food1, food2) {
  console.log(food1 + " and " + food2 + " should always be eaten together.");
}
speakTruth('peanut butter', 'chocolate')

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?
EXPLAIN:
I named the function speakTruth to be playfully assertive about the statement I wantet the funtion to print. But it doesn't give any info about what the sentense will be about or why. It may have made more sense to name it foodCombos
I named the perameters food1 and food2 which seem adequately specific to me. It lets us know that they will be foods and there will be two of them.



*/
