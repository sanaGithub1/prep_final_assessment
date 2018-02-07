//=======================================================================
/*                                     Q1                              */
//=======================================================================
  //lets make a user profile using closures
  //create a function person when invoked returns the name of that person
  var personA=person("jack")
  var personB=person("Mark")
  var personC=person("Sara")
  //your code is here
 
  function person(name, function sayMyName(name, i){
  	 each (name, function (name, i) {
  	 	person.push(function sayHello, (name,i));

  	 } );
  	 return person;
  	 }	 
   
    function addFriend(person, function{ person, addFriend{

    }

    })
    console.log ( sayHello+ person.name + " " + "");
  }
  


function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

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


//=======================================================================
/*                                  Q2                                 */
//=======================================================================
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
  
  var makePlayer1 = {
  	playerName : "messi";

  }	
  function addInfo(age, position, level, avaliablity){

  }
  function increaseLevel{
  	var level = n;
 }
 function isAvailable (){
 	if(player1.isAvailable = true){
 		return true;
 		else 
 			return false;
 
 }


 function chageState(){
 	if(player1.isAvailable = true){
 		return true} 
 		else
 			chageState = false



 }
 	}

//=======================================================================
/*                                  Q3                                 */
//=======================================================================
  //Depending on data modeling concept that you have learned:
  //create a factory function called makeCar that represents cars,
  // what different attributes cars may have? create two cars object from your factory function and save them in one array called cars!

  function makeCar( car ){
    // TODO: Your code here
    color: color,
    model: model,
    year: year,

  }
  makeCar[color: 'red', model: 'Toyota', year: 2018,
  color: 'white', model: 'BMW', year: 2017]
                   
  // write function displayCar that can be used to display one car

  function displayCar(car) {
    // TODO: Your code here
    displayCar.car()

  }
  console.log(car);
  
