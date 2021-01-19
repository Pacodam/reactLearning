import React, { Component } from "react";

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log(" ");
}

function insertFirstPosition(array, num) {
  let newArray = [];
  newArray[0] = num;
  for (let i = 1; i <= array.length; i++) {
    newArray[i] = array[i - 1];
  }
  return newArray;
}

class Arrays extends Component {
  render() {
    //array declaration and initialization
    const averageTemp = [];
    averageTemp[0] = 31.9;
    averageTemp[1] = 35.3;
    averageTemp[2] = 42.4;
    averageTemp[3] = 52;
    averageTemp[4] = 60.8;
    printArray(averageTemp);

    //initialize with elements
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    printArray(daysOfWeek);

    //inserting element at the end
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.push(10);
    numbers.push(11, 12, 13);
    printArray(numbers);

    //inserting at first position
    numbers.unshift(-2, -1);
    printArray(numbers);
    //unshift does this:
    let numbersInsertFirst = insertFirstPosition(numbers, -288);
    printArray(numbersInsertFirst);

    //remove value from array
    //from the end
    numbers.pop();
    printArray(numbers);

    //from the beginning
    numbers.shift();
    printArray(numbers);

    //SPLICE
    //from specific position
    numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    numbers.splice(4, 3); //this will remove three elements starting from index 4
    printArray(numbers); // 1 2 3 4 8
    //inserting numbers
    numbers.splice(4, 0, 5, 6, 7); //0 arg means we want insert and not remove
    printArray(numbers);

    //removing and adding
    numbers.splice(5, 3, 2, 3, 4);
    //we are removing three elements,
    //starting from the index 5, and we are also adding the elements 2, 3, and 4, starting at index5.

    //TWO DIMENSIONAL AND MULTIDIMENSIONAL

    //No matrix in js, but array of arrays
    let averageTempDay1 = [72, 75, 79, 79, 81, 81];
    let averageTempDay2 = [81, 79, 75, 75, 73, 72];
    let averageTemp2 = [];
    averageTemp[0] = [72, 75, 79, 79, 81, 81];
    averageTemp[1] = [81, 79, 75, 75, 73, 73];
    //this is valid:
    // averageTemp[0] = [];
    // averageTemp[0][0] = 72;
    // averageTemp[0][1] = 75;

    //looping: using nested for loop

    //METHODS
    //concat Joins multiple arrays and returns a copy of the joined arrays
    const zero = 0;
    const negativeNumbers = [-3, -2, -1];
    const positiveNumbers = [1, 2, 3];
    let numbersConc = negativeNumbers.concat(zero, positiveNumbers);
    printArray(numbersConc);

    //every Iterates every element of the array, verifying the desired condition(function) until false is returned.
    function isPositive(x) {
      console.log("testing every and some");
      return x > 0;
    }

    console.log(numbersConc.every(isPositive)); //false
    console.log(positiveNumbers.every(isPositive)); //true

    //some Iterates every element of the array, verifying the desired condition(function) until true is returned.
    console.log(numbersConc.some(isPositive)); //true
    console.log(positiveNumbers.some(isPositive)); //true
    console.log(negativeNumbers.some(isPositive)); //false

    //filter Creates an array with each element that evaluates to true in the functionprovided.
    const positiveN = numbersConc.filter((x) => isPositive(x)); //[1, 2,3]
    const positiveNn = numbersConc.filter(isPositive); //the same
    console.log(positiveN);
    console.log(positiveNn);
    //forEach Executes a specific function on each element of the array
    numbersConc.forEach((x) => console.log(x));

    //join Joins all the array elements into a string
    const arrStr = numbersConc.join();
    console.log("join: ", arrStr); //-3,-2,-1,0,1,2,3

    //indexOf Searches the array for specific elements and returns its position.
    let index = numbersConc.indexOf(-2);
    console.log("indexOf:", index); //1


    //lastIndexOf Returns the position of the last item in the array that matches the searchcriterion.
    let lastIndex = numbersConc.lastIndexOf(0);
    console.log("lastIndex:", lastIndex); //3

    //map Creates a new array from a function that contains the criterion/conditionand returns the elements of the array that match the criterion.
    const myMap = numbersConc.map(isPositive);
    console.log(myMap);

    //reverse Reverses the array so that the last item becomes the first and vice versa.
    const reversedNumbers = numbersConc.reverse();
    console.log("reverse:" , reversedNumbers);
    console.log("reverse:" , numbersConc); //array is modified!

    //slice  Returns a new array from the specified index, index is included.
    const numFromZero = numbersConc.slice(3);
    console.log("slice", numFromZero); //[0, -1, -2, -3]

    //sort Sorts the array alphabetically or by the supplied function.
    let unordered = [3, 6, -3, 2, 5, 6, 4, -32, 33];
    unordered.sort();
    console.log("sort", unordered);//-3, -32, 2, 3, 33, 4, 5, 6, 6]

    //toString Returns the array as a string.
    console.log("to String:", numbersConc.toString());

    //valueOf Similar to the toString method, returns the array as a string
    console.log("value of:", numbersConc.valueOf());

     //reduce receives a function with the
    // following parameters: previousValue, currentValue, index, and array. The index and
    // array are optional parameters, so we do not need to pass them if we do not need to use
    // them. We can use this function to return a value that will be added to an accumulator,
    // which will be returned after the reduce method stops being executed. It can be very useful
    // if we want to sum up all the values in an array
     let sum = numbersConc.reduce((previous, current) => previous + current);
     console.log("reduce", sum);
     let mult = numbersConc.reduce((previous, current) => previous * current);
     console.log(mult);


    //ECMAScript 6 and new array functionalities
    
    // @@iterator Returns an iterator object that contains the key/value pairs of the array that
    // can be synchronously called to retrieve key/value of the array elements.

    // copyWithin Copies a sequence of values of the array into the position of a start index.

    // entries Returns @@iterator, which contains key/value pairs.

    // includes Returns true if an element is found in the array, and false otherwise. This
    // was added in ES2016.

    // find Searches for an element in the array given the desired condition (callback
    // function) and returns the element if it is found.

    // findIndex Searches for an element in the array given the desired condition (callback
    // function) and returns the element index if it is found.

    // fill Fills the array with a static value.

    // from Creates a new array from an existing one.

    // keys Returns @@iterator, which contains the keys of the array.

    // of Creates a new array from the arguments passed to the method.
    
    // values Returns @@iterator, which contains the values of the array.
    
    return (
      <div>
        <h1>Arrays</h1>
      </div>
    );
  }
}

export default Arrays;
