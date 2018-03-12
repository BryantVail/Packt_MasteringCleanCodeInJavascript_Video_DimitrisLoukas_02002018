//init Mastering Clean Code in Javascript_Clean Functions
/*
    Write Cleaner Functions
    work w/arguments & return values in an optimal way.
    CleanCodeWJavaScript_CleanFunctions_
*/

////////////////////////////
/*
  Tip#11-Promises
    avoid callbacks
*/

function getSensorAData(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve({
                min:8,
                max:118,
            });
        }, //end anonymous function aka first parameter
            2000);//timeout seconds argument
    })
}//end getSensorAData(){

/*old getSensorA
function getSensorAData(cb){
    setTimeout(()=>{
      cb({
        min:8,
        max:118
      });
    },2000);
  }//end function getSensorAData(cb)
  */

  function getSensorBData(){
      return new Promise((resolve, reject)=> {
          setTimeout(() => {
              resolve({
                  temp:78,
                  value:26,
              });
          },500);
      });
  }//end function getSensorBData(){

  /*
  function getSensorBData(cb){
    setTimeout(()=>{
      cb({
        temp:78,
        value:26,
      });
    },500);
  }//end function getSensorBData(cb){
  */

  function getSensorCData(){
      return new Promise((resolve, reject)=> {
          setTimeout(() =>{
              resolve({
                  min:14,
                  max:92,
                  temp:64,
                  value:12,
              });
          }, 2000)
      });
  }//end function getSensorCData(){

  /*
  function getSensorCData(cb){
    setTimeout(()=>{
      cb({
        min:14,
        max:92,
        temp:64,
        value:12,
      });
    },2000);
  }//end function getSensorCData(cb){
  */
  

  function combineSensorData(){
      //Promise.all: accepts array of promises & returns a single promise after each promise is fulfilled. 
      //in the order we provided them.
    Promise.all(getSensorAData(), getSensorBData(), getSensorCData()).then(results => {
        let sensorAData = results[0];
        let sensorBData = results[1];
        let sensorCData = results[2];
    });
  }// end function combineSensorData(){

  /* 
  function combineSensorData(){
    let sensorAData = 1;
    let sensorBData = 2;
    let sensorCData = 3;
    
    getSensorAData((sensorAData) => {
      console.log(`sensor a data: ${sensorAData}`);
  
      getSensorBData(sensorBData =>{
        console.log(`sensor B Data: ${sensorBData}`);
  
        getSensorCData(sensorCData => {
          console.log(`Sensor C Data: ${sensorCData}`);
        });
      });
    });
  }//end function combineSensorData(){
  */

  combineSensorData();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  