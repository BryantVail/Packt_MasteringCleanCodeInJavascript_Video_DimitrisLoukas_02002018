
/*
  
  meaningful variables:
*/
    //tip#1: Favor more descriptive names rather than short names.
    let person  = {
      fName = "John",
      lastName  = "Vail",
      fatherName = "Lewis"
    }
    
    console.log(`father's name is: ${fName}`);//this could be done on accident
//arrival
var time1 = new Date();

//departure
var time2 = new Date();
//if you need comments to describe your code, 
//names should be MEMORABLE, go between files quickly

//-- Tip#4
//    Avoid Unecessary Context

export class Student{
  constructor(...){
     this.studentAcademicID   = studentAcademicID;
    this.studentFirstName    = studentFirstName;
    this.studentLastName     = studentLastName;
    this.studentUniverisity  = studentUniverisity;
  }//end constructor
}//end Student Class


//VERSUS


//this is best, there is already a context of a student
export class Student {
  constructor(...){
    this.academicID   = academicId;
    this.firstName    = firstName;
    this.lastName     = lastName;
    this.univerisity  = university;
  }//end constructor
}//end export class Student

//-- Tip#5
//    -Maintain Coding Conventions

export class Student{
  get(){
  }
  get_student(){
  }
  
  getStudent(){
  }
  
}//end class Student



















































