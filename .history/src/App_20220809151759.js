import React from "react";
import "./App.css";
const App = () => {
  const student = [
    { name: "kiran", age: "10" },
    { name: "indra", age: "10" },
    { name: "ram", age: "10" },
  ];

  // eslint-disable-next-line array-callback-return
  student.map((n, a) => {
    console.log(` name: ${n.name}  age: ${a.age} class: 3`);
  });
  return (
    <>
      <div></div>
    </>
  );
};
export default App;
