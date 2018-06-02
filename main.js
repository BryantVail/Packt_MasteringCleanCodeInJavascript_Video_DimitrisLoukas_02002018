"use strict";//always use strict


//foreach & map

let todos = [
      {task: "buy eggs",      completed:  false},
      {task: "Feed the dog",  completed:  true}, 
      {task: "Study for Net+",completed:  false},
      {task: "Cook Dinner",   completed:  false}
];

function makePending(todos){

    //   for(let i =0;i<todos.length; i++){
    //         todos[i].completed = false;
	//   }//end for   CTRL+K, CTRL+C
	
	// //3 arguments: 
	// 	Item(todo item in this case), 
	// 	index, 
	// 	can also take a whole array?"dont need it right now"
	todos.forEach((todo, index)=> {
		todo.completed = false;
	});

	//Array.prototype.map
	//constructs a new array from the values in the function

	function addIdentifier(todos){
		for(let i =0;i<todos.length; i++){
			todos[i].id = i+1;
		}
	}//end addIdentifier

	console.log(`before adding identifier: \n${todos}`);

	addIdentifier(todos);
	console.log(`after adding identifier: \n${todos}`);

}//end makePending(todos)
console.log(todos);
console.log();
makePending(todos);
console.log(todos);



