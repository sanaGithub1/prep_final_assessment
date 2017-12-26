//--------------------------------------------------------//
//                    Helper functions                    //
//--------------------------------------------------------//

// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
//=============================================================================
/*                                    Q1                                     */
//=============================================================================

//write a function called factorial , 
// that takes a number as an input and returns the factorail of that number as an output (using recursion).
// factorial(3); // => 3 * 2 * 1 => 6 
// factorial(4); // => 4 * 3 * 2 * 1 => 24 
// factorial(5); // => 5 * 4 * 3 * 2 * 1 => 120

function factorial(n) {
   //your code is here
}


//=============================================================================
/*                                    Q2                                     */
//=============================================================================

var bucketOfSloths = [
  {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
  {name: {first: "Slow", last: "Pumpkin"}, age: 3},
  {name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
  {name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
  {name: {first: "Jungle", last: "Fuzz"}, age: 2}
];

// write a function called longestName, that takes an array as an input (in this case its bucketOfSloths array)
// and returns the sloth with the longest name in that array
// Note that: the longest name is not only the first name, its first, middle and last name compined.
 
function longestName(bucketOfSloths) {
  //your code is here 
}

//=============================================================================
/*                                     Q3                                     */
//=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using one of the helpers functions(reduce,each,map,filter)

  function wordLengths(str){
  //your code is here
  }

  wordLengths("hello its me") // [5,3,2]
//=============================================================================
/*                                     Q4                                     */
//=============================================================================
// Use the updated version of reduce to write a function max that returns the maximum number in an array of numbers.    
  function maxi(arr) {
    // your code is here
  }

  maxi([6,2,8,9]) // 9
  maxi([9,1,14,-4]) // 14
