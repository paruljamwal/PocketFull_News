
import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import { auth } from './Firebase/firebase';
import Home from './Pages/Home';

function App() {
const [fullname,setfullname] = useState("") 
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
      setfullname(user.displayName)
      }else{
      setfullname("")

      }
    })
  })
  return (
    <div className="App">
     <Navbar name={fullname} /> 
      
  
     <AllRoutes/>
    </div>
  );
}

export default App;
