import React from "react";
import "./App.css";
const App = () => {
  let student = [
    { name: "kiran", age: "10" },
    { name: "indra", age: "10" },
    { name: "ram", age: "10" },
  ];

  student.map((n, a) => {
    console.log(` age: ${a.age} class: 3`);
  });
  return (
    <>
      {" "}
      <div></div>
    </>
  );
};
export default App;
