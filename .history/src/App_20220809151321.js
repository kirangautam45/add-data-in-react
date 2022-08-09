import React from 'react'
import "./App.css";
 const App = () => {
  let student= [{name : "kiran" ,age:"10" },
  {name:"indra", age:"10"},
  {name:"ram" ,age:"10"}];

  student.map((name, age)=>{
    console.log(` name: ${name} ${age} class: 3`)
  })
    return (
      <>    <div>
     
    </div>

    </>

  )
}
export default App;