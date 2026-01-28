import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import TimeSinceMounted from './components/TimeSinceMounted';

function App() {
  
  const person ={
    fullname:"John Doe",
    bio:"Traveler, Reader and love languages!",
    img:"https://img.freepik.com/free-photo/guy-standing-sea-spreading-hands_74855-4054.jpg?semt=ais_hybrid&w=740&q=80",
    profession:"Frontend developer - freelance"
  }

  const [show, setshow] = useState(false);

  return (
    <div className="App">
      <button className='btn' onClick={(e)=>setshow(!show)}>Show</button>
     
      {show==true?(<Card person={person}/>):null}

      <TimeSinceMounted/>
      
    </div>
  );
}

export default App;
