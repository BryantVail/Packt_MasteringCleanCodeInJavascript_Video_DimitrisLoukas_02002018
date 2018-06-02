"use strict";//always use strict


//foreach & map

let todos = [
      {task: "buy eggs",      completed:  false},
      {task: "Feed the dog",  completed:  true}, 
      {task: "Study for Net+",completed:  false},
      {task: "Cook Dinner",   completed:  false}
];

function makePending(todos){

      for(let i =0;i<todos.length; i++){
            todos[i].completed = false;
      }//end for
}//end makePending(todos)
console.log(todos);

makePending(todos);
console.log(todos);



