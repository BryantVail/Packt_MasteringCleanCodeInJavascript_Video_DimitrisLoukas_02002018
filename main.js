//init Mastering Clean Code in Javascript_Clean Functions
/*
    Write Cleaner Functions
    work w/arguments & return values in an optimal way.
*/

//tip#8, Single Responsibility 

var products = [
  {
    name:'CPU',
    price:228.99,
    bought:true,
  },
  {
    name:'RAM',
    price:7.99,
    bought:false,
  },
  {
    name:'Hard Drive',
    price:70,
    bought:true,
  },
  {
    name:'keyboard',
    price:15.99,
    bought:false,
  }
];//end products array

//Functions

function prepareData(items){
  addIds(items);//changing the local variable passed in
  let boughtItems = getBoughtItems(items);
  let totalCost = calculatePriceTotal(boughtItems);
  console.log("prepareData complete");
}//end function prepareData


function addIds(items){//adds ID to any product in 'items' that does not have an ID.
  
  for(let i=0;i<items.length; i++){
    if(items[i].id !== true){
      items[i].id = i+1;
    }//end if    
  }//end for
}//end function addIds(items){

function getBoughtItems(items){
  let boughtItems = [];

  for(let i =0; i<items.length; i++){ 
    if(items[i].bought){
      boughtItems.push(items[i]);
    }//end if
  }//end for
  return boughtItems;
}//end getBoughtItems

function calculatePriceTotal(items){
  let total = 0;
  for(let i =0;i<items.length;i++){
    total += items[i].price
  }
  console.log(`totalCost: ${total}`);
}//end function calculateMoneyAlreadySpent(items){

prepareData(products);


//////////////////////////////////////
/*Tip#9: 
    Reduce Number of Arguments
*/
























































