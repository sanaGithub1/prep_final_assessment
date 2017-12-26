//=============================================================================
/*                              Q1                                          */
//=============================================================================

   //write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
  //solve it using one of the helpers functions(reduce,each,map,filter)

  function values(obj){
  // your code is here
  }
  // values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129]; 


//=============================================================================
/*                              Q2                                           */
//=============================================================================
  //lets make a user profile using closures
  //create a function person when invoked returns the name of that person

  function person(name){
    //your code is here
  }
  var personA=person("jack")
  var personB=person("Mark")
  var personC=person("Sara")

  // personA.sayMyName(); // "jack"
  // personB.sayMyName(); // "Mark"

  //now modify that closure and add a function that says hello to the person name;
  
  // personA.sayHello(); // hello jack
  // personB.sayHello(); // hello Mark

  //how about we let jack and mark meet toghter!
  //modify your closure and add function addFriend that accepts object of functions, and let jack meets his friends.

  // personA.addFriend(personB); // "you just became friend with Mark"
  // personA.addFriend(personC); // "you just became friend with Mark and Sara"

  //modify your closure to tell mark how many friends does he have

  // personA.listFriends(); // "Mark! you have 2 friends"


//=============================================================================
/*                                  Q2                                      */
//=============================================================================
  //lets create a football team using OOP concept,
  // a - we need to create the players (lets create only one for now), the player declaration should take the name of the player   
    
  // var player1 = Player("messi")

  // b - we need function to add the other info for the player with addInfo function
  
  // player1.addInfo(age, position, level, availability );

  // c- create another function to increase the the level for the player by n value 
   
  // player1.increaseLevel(4); 

  // d - we need another function to check the player state, if the player is available it should return true , if not it should return false
  //      note that the default state of the player is false.
    
  // player1.isAvailable();  // true / false

  // f- in order to change the state of the player, create a function called chageState, when called it will make the player avaliablity true,
  //    and when called again it will make it false.

  // player1.chageState(); // true
  // player1.chageState(); // false

  //writ your code here .....