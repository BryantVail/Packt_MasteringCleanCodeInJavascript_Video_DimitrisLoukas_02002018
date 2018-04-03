//module-pattern.js

function ModuleLoader(){
  var modules = {};
  
  function getInstance(name){
    if(modules[name]){
        return modules[name];
    }
    else{
        throw new Error(`Undefined module: ${name}`);
    }//end if else
  }//end getInstance
  
  
  function define(name, dependencies, instance){
      if(modules[name]){
           throw new Error(`Module ${name} already defined`);
      }
      else{
        var depsInstances  = dependencies.map(dep) => {
            return getInstance(dep);
        }//end anonymous function from dependencies.map(dep)
        modules[name] = instance.apply(instance/*for this binding*/,depsInstances);
      }//end else   
  }//end define
    return {
      getInstance: getInstance, 
      define: define
    };
}//end ModuleLoader



















