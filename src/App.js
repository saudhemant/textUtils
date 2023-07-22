import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About'
import React, { useState, useEffect } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    showAlert(mode, (mode === 'light' ? "Dark Mode Enabled" : "Light Mode Enabled"));
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (mode, message) => {
    setAlert({
      mode: mode,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? '#E8E9EA' : '#313539';
  }, [mode]);

  return (
      <>
      {/* <Router> */}
        <Navbar 
          title="TextUTILS"
          mode={ mode }
          toggleMode = { toggleMode }
        />
        <Alert 
          alert={alert}
        />
        {/* <Routes> */}
          {/* <Route  */}
            {/* exact path='/' */}
            {/* element={ */}
              <div className="container mt-3">
                <TextForm 
                  heading="TEXT UTILS"
                  label="Enter something below: "
                  mode={ mode }
                  showAlert={showAlert}
                />
              </div>
          {/* }/ > */}
          {/* <Route  */}
            {/* exact path='/about' */}
            {/* element={ */}
              {/* <About /> */}
          {/* }/ > */}
        {/* </Routes> */}
      {/* </Router> */}
      </>
  );
}

export default App;
