import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const name= [{name : "kiran" ,age:"10" },{name:"indra", age:"10"},{"name:"ram" ,"age":"10"}];
  const studentTenclass =[];

  const newarray = {
    name.map((name, age, class)=>{
      return(
        {name}
      )
    })
  }

  
  return (
    <div className="App">
      <div>
       {studentClassTen}
      </div>
    </div>
  );
}

export default App;
