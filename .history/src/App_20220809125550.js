import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const name= ["kiran","indra","ram"]
  const [inputData, setData]=useState("")
  const handleChange=(e)=> 
  setData(e.target.value)

 name.filter(names=> names.includes({inputData})))

  
  return (
    <div className="App">
      <input 
      types ="text"
      placeholder='search data' value={inputData}
      onChange={handleChange}
      />
      <div>
        {filterData}
      </div>
    </div>
  );
}

export default App;
