import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const name= ["kiran","indra","ram"]
  const [inputData, setData]=useState("")
  
  return (
    <div className="App">
      <input 
      types ="text"
      placeholder='search data' value={inputData}
      onChange={handleChange}
      />
    </div>
  );
}

export default App;
