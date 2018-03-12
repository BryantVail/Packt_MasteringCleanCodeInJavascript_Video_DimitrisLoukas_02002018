//init Mastering Clean Code in Javascript_Clean Functions
/*
    Write Cleaner Functions
    work w/arguments & return values in an optimal way.
    CleanCodeWJavaScript_CleanFunctions_
*/

////////////////////////////
/*
  Tip#10
    avoid Flags
*/

let toDos= [
  {
    task:'get some eggs',
    done:false,
  },
  {
    task:'send pull req',
    done:true,
  },
  {
    task:'Watch "Mastering Clean Code in JavaScript"',
    done:false
  }
];

//filter = 0 prints all todos
//filter = 1 prints all completed todos
//filter = 2 prints pending todos

function printToDos(toDos, filter){
  if(filter ==0){
    for(let todo of toDos){
      console.log(todo.task);
    }//end for
  }//end if (filter ==0){
  else if(filter ==1){
    for(let todo of toDos){
      if(todo.done){
        console.log(todo.task);
      }//end if
    }//end for
  }//end else if(filter ==1){
  else if(filter == 2){
    for(let todo of toDos){
      if(!todo.done){
        console.log(todo.task);
      }
    }
  }  
}//end function printToDos(toDos, filter){

//////////////Solution to 'tags'
function printAllToDos(toDos){
  for(let todo of toDos){
    console.log(todo.task);
  }//end for
}//end function printAllToDos(toDos){

function printDoneTodos(toDos){
  for(let todo of toDos){
    if(todo.done){
      console.log(todo.task);
    }//end if
  }//end for
}//end function printDoneTodos(toDos){

function printPendingToDos(toDos){
  for(let todo of toDos){
    if(!todo.done){
      console.log(todo.task);
    }//end if
  }//end for
}//end function printPendingToDos(toDos){





















































