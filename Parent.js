import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [user, setUser] = useState("");
    const [col, setCol] = useState("");
    const fun = (arg) =>{
        setCol(arg);
    };
  return (
    <div style={{background:col}}>
      <p>Parent HI {user}</p>
      <Child setUser={setUser} fun = {fun}
      fun2={()=>{
        console.log(user);
      }}/>
    </div>
  )
}

export default Parent
