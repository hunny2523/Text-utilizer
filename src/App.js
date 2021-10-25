import './App.css';
import Navbar from './Navbar'
import Text from './textC';
import React,{useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    if (mode === "dark") {
        setMode('light');
        document.body.style.backgroundColor = "white";
    }
    else {
        setMode('dark');
        document.body.style.backgroundColor = "#343a40";
    }
}
  return (
    <>
    {/* <style>{'body { background-color: black; }'}</style> */}

    <Navbar title="Game" mode={mode}/>
    <Text handleMode={handleMode} mode={mode}/>
    </>
  );
}

export default App;
