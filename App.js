
import './App.css';
// import Counter from './components/Counter';
// import Calsi from './Calsi';
import Usestate from './components/Hooks/Usestate';
import UseEffect from './components/Hooks/UseEffect';

// import Counter from './components/Counter';
// import Input2 from './components/Input2';
// import { useState } from 'react';
// import Nav from './components/Nav/Nav';
function App() {
  // const [status, setStatus] = useState(true);
  return (
    <>
      {/* <button onClick={()=> setStatus(!status)}>Switch</button>
      {status ? <Input2 /> : <Calsi />} */}
      {/* <Calsi /> */}
      <Usestate />
      <UseEffect />
      </>
  );
}

export default App;
