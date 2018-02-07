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
// write a function called addOne that takes an array of numbers as an input, and returns a new array with all the array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]

function addOne(array){ // arrays, loops
 // your code is here
 while(var i = 0; i < addOne.length; i++)
 return 
     array = array.slice(1);
  }
  
}
//=============================================================================
/*                                    Q2                                     */
//=============================================================================

//write a function called factorial , 
// that takes a number as an input and returns the factorail of that number as an output (using recursion).
// factorial(3); // => 3 * 2 * 1 => 6 
// factorial(4); // => 4 * 3 * 2 * 1 => 24 
// factorial(5); // => 5 * 4 * 3 * 2 * 1 => 120

function factorial(n) {
	   //your code is here
	  for(i= 0; i< i.length; i++){
	  return  factorial(n);
	  }
}


//=============================================================================
/*                                    Q3                                     */
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
 //your code is here 
function longestName(bucketOfSloths, function{
	if (bucketOfSloths.(coll))
 ) {
  
  for(var i = 0; i< bucketOfSloths.length; i++){
    if(bucketOfSloths.name > i) {
    	return bucketOfSloths.name + '';
    }
  }
}

  }
}

//=============================================================================
/*                                     Q4                                    */
//=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using one of the helpers functions(reduce,each,map,filter)
//your code is here
  function wordLengths(str, predicate){
   var acc = [];
  each(str; function(str, i)){
  	if(wordLengths.(str, i){
  		acc.push(str);
  		
  	}
  	return str;
 

  wordLengths("hello its me") // [5,3,2]
//=============================================================================
/*                                     Q5                                    */
//=============================================================================
// Using reduce, write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured:

  function countOccurrences(string, character) { 
    // your code is here
    if (countOccurrences === undifind){
    	countOccurrences = array[0];
    	countOccurrences = countOccurrences.count(1);
    }
    	return count;
  }
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3

 
//=============================================================================
/*                                     Q6                                    */
//=============================================================================

   //write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
  //solve it using one of the helpers functions(reduce,each,map,filter)

  function values(obj){
    each(array, function(element, i) {
    acc.push(func(obj, i));
  });
  return obj + '' + "";
}
  
  // values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 


