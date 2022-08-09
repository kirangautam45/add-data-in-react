import React from 'react'

 const App = () => {
  let student= [{name : "kiran" ,age:"10" },
  {name:"indra", age:"10"},
  {name:"ram" ,age:"10"}];

  const newStudent = student.map((schoolname )=>{
    return schoolname.name

    console.log(schoolname)
  })
    return (
    <div>App</div>
    <div>
      {newS}
    </div>

  )
}
export default App;