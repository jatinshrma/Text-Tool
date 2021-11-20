import React from "react";

export default function buttons(props) {
  const upperCaseHandler = () => {
    let inputText = props.textInput.toUpperCase();
    props.setText(inputText);
  };

  const lowerCaseHandler = () => {
    let inputText = props.textInput.toLowerCase();
    props.setText(inputText);
  };
  
  const clearTextHandler = () => {
    props.setText('');
  };

  return (
    <>
      <button onClick={upperCaseHandler} className="btn btn-primary my-2">
        Convert To Uppercase
      </button>
      <button onClick={lowerCaseHandler} className="btn btn-danger my-2 mx-2">
        Convert To Lowercase
      </button>
      <button onClick={clearTextHandler} className="btn btn-secondary my-2">
        Clear
      </button>
    </>
  );
}
