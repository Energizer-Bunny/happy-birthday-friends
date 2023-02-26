import React  from 'react';
import NavbarComp from '../component/Navbar/Navbar';
import Home from './Home';
import data from '../Resources/data.json';
import mainpagestyle from './css/mainpage.module.css';
import {
  useParams
} from "react-router-dom";
function MainPage() {
  const { code } = useParams();
  var nameUser = data[code] !== undefined
  if(nameUser){
    return (
      <div className={mainpagestyle.mainpage}>
          <NavbarComp birthdayGuy = {code}/>
          <Home birthdayGuy = {code}/>
      </div>
    );
  }
  else{
    return <div></div>
  }
 
}

export default MainPage;