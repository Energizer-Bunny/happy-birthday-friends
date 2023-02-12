import React  from 'react';
import NavbarComp from '../component/Navbar/Navbar';
import Home from './Home';
import data from '../Resources/data.json';
import {
  useParams
} from "react-router-dom";
function MainPage() {
  const { code } = useParams();
  var nameUser = data[code] !== undefined
  if(nameUser){
    return (
      <div>
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