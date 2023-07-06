import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Rating from '@mui/material/Rating';
function App() {
  const [show,setShow] = useState(false)
  const [rate,setRate] = useState(0)
  return (
    <div>
      <h1>Workshop Hooks</h1>
      <button onClick={()=>setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {
        show && <Counter/>
      }
         <Rating
        name="simple-controlled"
      onChange={(e)=>setRate(e.target.value)}
      
      />
      <h3>{rate}</h3>
    </div>
  );
}

export default App;
