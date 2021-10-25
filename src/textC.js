import React, { useState } from 'react'
export default function Text(props) {
    const [text, setText] = useState("");


    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUppClick = () => {
        const upptext = text.toUpperCase();
        setText(upptext);
    }
    const handleLowClick = () => {
        const lowtext = text.toLowerCase();
        setText(lowtext);
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleSpaces = () => {
        // const temp = text.trim();
        // setText(temp);           
        // above code is for removing first and end spaces
        const temp=text.split(/[ ]+/)
        setText(temp.join(" "));
        // use can use replace here also
    }

    const words = text.split(" ").length;
    const char = text.length;
    return (
        <div className="container" style={{ color: props.mode === 'light' ? "black" : "white" }}>
            <h2>Enter Text here!</h2>
            <textarea onChange={handleOnChange} style={{ color: props.mode === 'light' ? "black" : "white", backgroundColor: props.mode === 'light' ? "white" : "#212529" }} placeholder="Enter Text here!" value={text} className="form-control" id="para" rows="10"></textarea>
            <button className="btn btn-primary my-3 mx-2" onClick={handleUppClick}>Upper case</button>
            <button className="btn btn-primary my-3 mx-2 " onClick={handleLowClick}>Lower Case</button>
            <button className="btn btn-primary my-3 mx-2 " onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-2 " onClick={handleSpaces}>Remove Spaces</button>
            <button className="btn btn-primary my-3 mx-2 " onClick={props.handleMode}>{props.mode === "dark" ? 'Light' : 'Dark'} MODE</button>
            <h3>Total Words: {words} Total Characters : {char}</h3>
            <h2>preview: </h2>
            <p>{text==="" ? "Type Something in above box" : text}</p>
        </div>
    );
}