// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState();
  const showalert=(massage,type)=>{
    setAlert({
      mes:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showalert('dark mode is enable','success')
      setInterval(() => {
        document.title='dark';
        
      }, 1500);
      setInterval(() => {
        document.title='dark';
        
      }, 2000);
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert('light mode is enable','success')
      document.title='light';
    }
  }
  return (
      <>
      <Router>

      <Navbar title='texeutils' mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      {/* <About/> */}
      <Routes>
          <Route exact path="/about" element={<About />}>
           
          </Route>
          <Route exact path="/"element={<Textfrom mode={mode}/>}>
      
          </Route>
        </Routes>
      </Router>
     
        

      </> 

  );
}

export default App;
