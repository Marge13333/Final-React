import background from '../section/intro-img/university-background-04.jpg'
import HeaderSection from "../header/header"
import "../404-page/404.css"

const PageNotFound = () =>{
    return(
        
        <div className='wrapper' style={{backgroundImage: `url(${background})`}} >
            <HeaderSection/>
                <div className='notFoundWraper'>
                  <h1 className='notFounfTitle'>404 not found</h1>
                </div>
              </div>
    )
}
export default PageNotFound;