import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Home(){
  return(
    <div>
      <h1>Welcome to Home!</h1>
    </div>
  );
}

function Message(){
  const [message,setMessage] = useState('');

  useEffect(() => {
    const fetchMsg = async () => {
      try{
        const response = await axios.get('http://localhost:5000/api/message');
        setMessage(response.data.message);
      }
      catch(error){
        console.log("Error in fetching message: ",error);
      }
    };
    fetchMsg();
  }, []);

     return(
      <div>
        <h1>Something came from backend!</h1>
        <p>{message}</p>
      </div>
     );
}

function Info(){
  const [name,setName] = useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      try{
        const response = await axios.get('http://localhost:5000/api/info');
        setName(response.data.message);
      }
      catch(error){
        console.log("Error in fetching info: ",error);
      }
    };
    fetchInfo();
  }, []);


     return(
      <div>
        <h1>Something came from backend!</h1>
        <p>{name}</p>
      </div>
     );
}

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/api/message' element={<Message/>}/>
        <Route path='/api/info' element={<Info/>}/>
      </Routes>
    </Router>
  )
}

export default App;