import {useState} from 'react';
import background from './section/intro-img/university-background-04.jpg'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import UserContext from './UserContext'
import HeaderSection from "./header/header"
import IntroSection from "./section/intro"
import PageNotFound from "./404-page/404"



function App() {
  const [weather,setWeather] = useState()
  
  return (
    <UserContext.Provider value={{weather,setWeather}}>
        <BrowserRouter>

      <Route exact path="/" >
           <div className='wrapper' style={{backgroundImage: `url(${background})`}} >
                <HeaderSection/>
                 <IntroSection/>
              </div>
       </Route >
       <Route exact path="*">
       <PageNotFound/>
             </Route>

        </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
