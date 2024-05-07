// OptionSelection.jsx
// OptionSelection.jsx
import React from "react";

export default function OptionSelection({ arrayItems , selectOption }) {
  console.log("Rendering OptionSelection");

  return (
    <>
    <h1 className="heading">EducationAI</h1>
    <div className="grid-main">
     {arrayItems.map((item) => (
    <div key={item.id} onClick={()=>selectOption(item.option)}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
     ))}
     </div>
    </>
  );
}


