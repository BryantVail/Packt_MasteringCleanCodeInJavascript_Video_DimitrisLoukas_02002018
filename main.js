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
  for(let i=0;i<items.length; i++){
    items[i].id = i+1;
  }//end for

  let boughtItems = [];

  for(let i=0;i<items.length;i++){
    if(items[i].bought){
      boughtItems.push(items[i]);
    }//end if
  }//end for


  let totalCost = 0;

  for(let i=0;i<boughtItems.length;i++){
    totalCost += boughtItems[i].price;
  }//end for

  console.log(`totalCost: ${totalCost}`);
}//end function prepareData

prepareData(products);


























































