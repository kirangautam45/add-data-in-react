import React from "react";
import "./App.css";
const App = () => {
  const student = [
    { name: "kiran", age: "10" },
    { name: "indra", age: "10" },
    { name: "ram", age: "10" },
  ];
  
  const students= student.map((studen) => {
    return({
      ...studen,
      class:3
    })
  });
  console.log(students)
  return (
    <>
      <div></div>
    </>
  );
};
export default App;
