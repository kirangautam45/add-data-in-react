import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const names= [{name : "kiran" ,age:"10" },
  {name:"indra", age:"10"},
  {name:"ram" ,age:"10"}];
  

   
names.map(studentclass);
function studentclass(newName, newAge ){
  return[newName.name, newAge.age,]
}
  
  return (
    <div className="App">
      <div>
     
      </div>
    </div>
  );
}

export default App;
