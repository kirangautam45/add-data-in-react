import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const names= [{name : "kiran" ,age:"10" },{name:"indra", age:"10"},{name:"ram" ,age:"10"}];
  const studentTenclass =[];

   

  
  return (
    <div className="App">
      <div>
      {
    names.map((newname, newage, newclass)=>{
      return(
        {newname.name, newage.age, newclass}
      )
    })
  }
      </div>
    </div>
  );
}

export default App;
