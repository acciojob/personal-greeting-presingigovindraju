
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [msg,setMsg] = useState("")
  function him(e){
    setMsg(e.target.value)
  }
  return (
    <div>
        <p>Enter your name:</p>
        <form>
             <input type="text"  onChange={him}/>
        </form>
        {
          msg!=""?<p>Hello {msg}!</p>:""
        }
    </div>
  )
}

export default App
