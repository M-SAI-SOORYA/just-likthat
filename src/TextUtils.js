import React from 'react'
import { useState } from 'react'
export default function TextUtils(props) {
  const [text, setText] = useState("Enter your text here");
  const clickerUpper = () => {
    console.log("The upper button is clicked: " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  const clickerLower = () => {
    console.log("The lower button is clicked: " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const onchanger = (event) => {
    console.log("changed");
    setText(event.target.value);
  }

  return (
    <div className="container">
      <h1 className='my-3'>Enter Text Here</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange={onchanger} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={clickerUpper}>TO UPPERCASE</button>
      <button className="btn btn-primary mx-2" onClick={clickerLower}>TO LOWERCASE</button>
      <h1>The Text Summary</h1>
      <p>The number of characters: {text.length}</p>
      <p>The number of words: {text.split(" ").length}</p>

    </div>
  )
}
