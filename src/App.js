import { useState } from 'react';
import './App.css';

function App() {
  const[value,setvalue]=useState("");
  const buttonhandler=(item)=>{
  if(item==="C"){
    setvalue(" ");
  }
  else if(item==="<"){
    setvalue(value.slice(0,-1));
  }
  else if(item==="="){
    setvalue(eval(value).toString());
  }
  else{
   setvalue((preitem)=>preitem+item)
  }
  };
  return (
    <div className="App">
      <div className='calc'>
        <input type="text" name='input' value={value} />
        <div className='butt'>
          <button onClick={()=>buttonhandler("C")}>C</button>
          <button onClick={()=>buttonhandler("<")}>&lt;</button>
          <button onClick={()=>buttonhandler("%")}>%</button>
          <button onClick={()=>buttonhandler("/")}>/</button>
          <button onClick={()=>buttonhandler("9")}>9</button>
          <button onClick={()=>buttonhandler("8")}>8</button>
          <button onClick={()=>buttonhandler("7")}>7</button>
          <button onClick={()=>buttonhandler("+")}>+</button>
          <button onClick={()=>buttonhandler("6")}>6</button>
          <button onClick={()=>buttonhandler("5")}>5</button>
          <button onClick={()=>buttonhandler("4")}>4</button>
          <button onClick={()=>buttonhandler("-")}>-</button>
          <button onClick={()=>buttonhandler("3")}>3</button>
          <button onClick={()=>buttonhandler("2")}>2</button>
          <button onClick={()=>buttonhandler("1")}>1</button>
          <button onClick={()=>buttonhandler("*")}>*</button>
          <button onClick={()=>buttonhandler("0")}>0</button>
          <button onClick={()=>buttonhandler("00")}>00</button>
          <button onClick={()=>buttonhandler(".")}>.</button>
          <button onClick={()=>buttonhandler("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
