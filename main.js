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

}//end makePending(todos)

console.log(todos);
console.log();
makePending(todos);
console.log(todos);



