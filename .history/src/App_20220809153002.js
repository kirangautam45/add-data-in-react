import React from "react";
import "./App.css";
const App = () => {
  const student = [
    { name: "kiran", age: "10" },
    { name: "indra", age: "10" },
    { name: "ram", age: "10" },
  ];

  // eslint-disable-next-line array-callback-return
  student.map((students) => {
    return({
      ...student,
      class:3
    })
  });
  console.log(student)
  return (
    <>
      <div></div>
    </>
  );
};
export default App;
