
import './App.css';
import AboutMe from './Components/AboutME';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Header from './Components/Header';



function App() {
 
  return (
    
    <div className="App" >
        
    <Header />
<Banner/>
<AboutMe/>
<Skills/>
<Projects/>
<ContactMe/>
 <Footer/>

    </div>
  );
}

export default App;
