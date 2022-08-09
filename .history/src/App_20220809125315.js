import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const name= ["kiran","indra","ram"]
  const [inputData, setData]=useState("")
  const handleChange=(e)=> 
  setData(e.target.value)

 const filterData = name.filter(names=> names.includes({inputData}).map(filterData=>(
  {filter}
 )))

  
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
