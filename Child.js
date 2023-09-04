import React from 'react';

const Child = ({setUser, fun}) => {
  return (
    <div>
      Child
      <button onClick={() => setUser("Saurabh")}>Button from Click</button>
      <button onClick={() => fun("green")}>un BUtton</button>
    </div>
  )
}

export default Child
