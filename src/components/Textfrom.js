import React,{useState}from 'react'

export default function Textfrom(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to uppercase!", "success");
    }
    
    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted to lowercase!", "success");
    }
    
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showalert("Text Cleared!", "success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }
    
    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showalert("Copied to Clipboard!", "success");
    }
    
    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra spaces removed!", "success");
    }
    
    const [text, setText] = useState(''); 
    
    
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>text</h1>
    <div class="mb-3">
  <textarea class="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'grey':'white',color:'light'?'black':'dark'}}id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nthing to preview!"}</p>

</div>

    </>
  )
}
