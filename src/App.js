
import { useState } from 'react';
import './App.css';
import Image from './image/bodymass.jpg';

function App() {
  const[height,setHeight]=useState("");
  const[weight,setWeight]=useState("");
  const[bmi,setBmi]=useState("null");
  const[status,setStatus]=useState("");
  const[error,setError]=useState("");
  
  function clearInput(){
    setHeight("");
    setWeight("");
    setBmi("");
    setStatus("");
  }
 function calculateBmi() {
  const isValidHeight=/^\d+$/.test(height);
  const isValidWeight=/^\d+$/.test(weight);
  if(isValidHeight&&isValidWeight){
   const  heightInMeters=height/100;
   const bmiValue=weight/( heightInMeters* heightInMeters);
   setBmi(bmiValue.toFixed(2));
   if(bmiValue<18.5){
    setStatus("Under weight");
   }else if(bmiValue>=18.5 && bmiValue< 24.9){
    setStatus("Normal weight");
   }else if(bmiValue>=25&&bmiValue<29.9){
    setStatus("overweight");
   }
   else{
    setStatus("obese");
   }
   setError("");
  }else{
    setBmi("null");
    setStatus("");
    setError("Invalid height and weight")
  }
 };
  return (
    <div className="bmi_calculator">
      <section className='box'>
        <img src={Image}  alt ="img"/>
      </section>
      <section className='Data'>
      <h1>BMI Calculator</h1>
      <p className='error'>{error} </p>
        <div className='input_holder'>
        
        <label htmlFor='height'>Height(cm):</label>
        <input type='text'id='height'value={height} onChange={(e)=>{setHeight(e.target.value)}} ></input>
        </div>
        <div className='input_holder'>
      
        <label htmlFor='height'>Weight(kg):</label>
        <input type='number'id='weight'value={weight} onChange={(e)=>{setWeight(e.target.value)}}></input>
        </div>
     
      <section className='footer'>
        <button onClick={calculateBmi}>Calculate</button>
        <button onClick={clearInput}>Clear</button>
        <div className='status'>
        <p className='bmivalue'>BMI is:{bmi}</p>
        <p className='statusvalue'>Status:{status}</p>
        </div>
      </section>
      </section>
    </div>
  );
}

export default App;
