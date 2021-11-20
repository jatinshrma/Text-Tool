import React,{useState} from "react";
import Buttons from "./buttons";

export default function Main(props) {

  const onValueChange=(e)=>{
    setText(e.target.value);
  }
  const [text, setText]= useState('');

  return (
    <div style={props.themeHandler}>
      <h1 className="text-center my-3">Welcome to TEXT-TOOL!</h1>
      <div className="container-sm mb-3">
        <textarea style={props.themeHandler} value={text} onChange={onValueChange} className="form-control" id="textArea" rows="3"></textarea>
        <Buttons textInput={text} setText={setText}/>
        <div>{text.split(/\w+/).length-1} words and {text.length} letters</div>
      </div>
    </div>
  );
}
