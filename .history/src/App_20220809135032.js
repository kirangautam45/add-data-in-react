import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const name= [{"name" : "kiran" ,"age":"10" },{"name":"indra", "age":"10"},{"name":"ram" ,"age":"10"}]
  const studentTenclass =[],

  
  return (
    <div className="App">
      <input 
      types ="text"
      placeholder='search data' value={inputData}
      onChange={handleChange}
      />
      <div>
       {studentClassTen}
      </div>
    </div>
  );
}

export default App;
