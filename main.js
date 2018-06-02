"use strict";//always use strict


//foreach & map

let todos = [
      {task: "buy eggs",      completed:  false},
      {task: "Feed the dog",  completed:  true}, 
      {task: "Study for Net+",completed:  false},
      {task: "Cook Dinner",   completed:  false}
];

	//Array.prototype.map
	//constructs a new array from the values in the function

	function addIdentifier(todos){
		for(let i =0;i<todos.length; i++){
			todos[i].id = i+1;
		}
	}//end addIdentifier

	console.log("before adding identifier: \n", todos);

	addIdentifier(todos);
	console.log("after adding identifier: \n", todos);

