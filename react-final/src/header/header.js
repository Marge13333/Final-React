
import {useContext} from 'react';
import "../header/header.css";
import headerBg from '../header/header-img/5466409.jpg'
import UserContext from '../UserContext'
import WeatherFunction from './weather';

const HeaderSection = () =>{
  const {weather,} = useContext(UserContext)
  
 {WeatherFunction()}

  return(
   
      <header style={{backgroundImage: `url(${headerBg})`}}  >
      <div className='headerWrapper'>
      <div className='weather'>
      <h4 className='weatherTitle'>Tbilisi</h4>
      <h4 className='weatherTitle' >{weather}°</h4>
      </div>
      </div>
    </header>
  )
}

export default HeaderSection;