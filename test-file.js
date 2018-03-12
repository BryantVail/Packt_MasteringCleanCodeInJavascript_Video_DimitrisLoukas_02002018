var todos = [
    {
        id:1,
        task:'commit',
        completed:true
    },
    {
        id:2,
        task:'push',
        completed:false
    },
    {
        id:3,
        task:'leave building',
        completed:false

    }
];

console.log('all todos: ');
console.log(todos);

var completed = [];
for(let todo of todos){
    if(todo.completed){
        completed.push(todo);
    }//end if
}//end for










































