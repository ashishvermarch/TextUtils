import React, { useState } from 'react'

export default function TextForm(props) {

    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success', 'converted to Upper Case');
    }
    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('success', 'converted to Lower Case');
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert('success', 'Text Cleared');
    }
    const inverseText = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toLowerCase()) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
        props.showAlert('success', 'Text Inversed');
    }
    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('success', 'Text Copied');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('success', 'Extra Space has been removed');
    }
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const [text, setText] = useState('Enter some text here');
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#48485c', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={toUpperCase} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={toLowerCase} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clearText} >Clear text</button>
                <button className="btn btn-primary mx-2" onClick={inverseText} >Inverse text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words  {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes! to read those words</p>
                <h2>Preview - </h2>
                <p>{text.length > 0 ? text : "Enter something to get preview here..."}</p>
            </div>
        </>
    )
}
