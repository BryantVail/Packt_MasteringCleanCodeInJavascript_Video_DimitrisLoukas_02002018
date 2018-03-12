//init Mastering Clean Code in Javascript_Clean Functions
/*
    Write Cleaner Functions
    work w/arguments & return values in an optimal way.
    CleanCodeWJavaScript_CleanFunctions_
*/

////////////////////////////
/*
  Tip#11
    avoid callbacks
*/

function getSensorAData(cb){
  setTimeout(()=>{
    cb({
      min:8,
      max:118
    });
  },2000);
}//end function getSensorAData(cb){

function getSensorBData(cb){
  setTimeout(()=>{
    cb({
      temp:78,
      value:26,
    });
  },500);
}//end function getSensorBData(cb){

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

combineSensorData();




















































