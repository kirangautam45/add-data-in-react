import { useState } from 'react';
import './App.css';

const  App = ()=> {
  const name= [{"name" : "kiran" ,"age":"10" },{"name"indra"},{"ram"}]
  const [inputData, setData]=useState("")
  const handleChange=(e)=> 
  setData(e.target.value)
  
  return (
    <div className="App">
      <input 
      types ="text"
      placeholder='search data' value={inputData}
      onChange={handleChange}
      />
      <div>
        {
          name.filter((val)=>{
            if(inputData ===""){
              return val
            }else if(val.name.toLowerCase().includes(inputData.toLowerCase())){
              return val
            }
          })
        }
      </div>
      <div>
        {name}
      </div>
    </div>
  );
}

export default App;
