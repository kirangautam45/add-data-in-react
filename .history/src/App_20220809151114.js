import React from 'react'
import "./App.css";
 const App = () => {
  let student= [{name : "kiran" ,age:"10" },
  {name:"indra", age:"10"},
  {name:"ram" ,age:"10"}];

 student.map((schoolName, class)=>{
    console.log(`${schoolName}`)
  })
    return (
      <>    <div>
     
    </div>

    </>

  )
}
export default App;