import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const [mode, setMode] = useState('light');
  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('success', 'Dark mode has been enabled');
      document.body.style.backgroundColor = '#002850';
      document.title = 'TextUtils - Dark mode';
      // setInterval(() => {
      //   document.title = 'T e x t  U t i l s';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark mode';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Dark mode has been disabled');
      document.title = 'TextUtils - Light mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} handleMode={handleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
