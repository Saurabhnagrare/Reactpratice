import React, {useState} from "react";
import './components/Calsi.css';


const Calsi = () => {
    const [num1, setNum1] =useState(0);
    const [num2, setNum2] =useState(0);
    const [result, setResult] =useState("Enter Input");

    const Add = () =>{
        setResult(`Addition is = ` +(Number(num1)+(Number(num2))));
    };
    const Sub = () =>{
        setResult(`Substraction is = ` +(Number(num1)-(Number(num2))));
    };
    const Multi = () =>{
        setResult(`Multi is = ` +(Number(num1)*(Number(num2))));
    };
    const Divd = () =>{
        setResult(`Divd is = ` +(Number(num1)/(Number(num2))));
    };

  return (
    <div className="bg-dark text-white text-center my-5 py-5 calsi w-25 justify-content-center">
      <p className="text-strong">CALCULATOR</p><br/>
      <input className="my-3" type="text" placeholder="num1" onChange={(e)=> setNum1(e.target.value)} /><br/>
      <input className="my-4" type="text" placeholder="num2" onChange={(e)=> setNum2(e.target.value)} /><br/>
      <p className="py-3">{result}</p>
      <button className="px-4 bg-secondary text-white" onClick={Add}>Add</button>
      <button className="px-4 bg-secondary text-white" onClick={Sub}>Sub</button><br/>
      <button className="px-4 bg-secondary text-white" onClick={Multi}>Multi</button>
      <button className="px-4 bg-secondary text-white" onClick={Divd}>Div</button>
     
    </div>
  )
}

export default Calsi
