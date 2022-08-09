import React from "react";
import "./App.css";
const App = () => {
  const student = [
    { name: "kiran", age: "10" },
    { name: "indra", age: "10" },
    { name: "ram", age: "10" },
  ];

  // eslint-disable-next-line array-callback-return
  students.map((students) => {
    return({
      ...student,
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
