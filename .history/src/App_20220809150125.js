import React from 'react'
import "./App.css";
 const App = () => {
  let student= [{name : "kiran" ,age:"10" },
  {name:"indra", age:"10"},
  {name:"ram" ,age:"10"}];

  const newStudent = student.map((schoolname )=>{
    return schoolname.name

    
  })
    return (
      <>    <div>
      {newStudent}
    </div>

    </>

  )
}
export default App;