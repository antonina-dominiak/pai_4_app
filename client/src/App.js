import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.name + ", " + data.msg));
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">it's me, tailwind</h1>
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>{data}</p>
      </header>
    </div>
  );
}
export default App;