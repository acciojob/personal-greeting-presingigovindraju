
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [msg,setMsg] = useState("")
  return (
    <div>
      <p>Enter your name:</p>
        <input type="text" name="userName" onChange={(e)=>setMsg(e.target.value)}/>
        <p>{msg}</p>
    </div>
  )
}

export default App
