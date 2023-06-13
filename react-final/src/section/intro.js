import axios from 'axios';
import { useState} from 'react';
import "../section/intro.css";

const IntroSection = () =>{
    const [country,setCountry] = useState ('')
  const [universities,setuniversities] = useState([])
  const [scroll, setScrol] = useState('hidden')
  const [width , setWidth] = useState(0)
  const [display,setDispaly] = useState("inlineBlock")

  const SearchClick = async (e) =>{
    try{
      
      e.preventDefault() 
  
      const response = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`,
        {
          country : country
        }
      )

  
  const colle = response.data
  setuniversities(colle)
  console.log(universities)
  setDispaly("none")
  setScrol("scroll")
  setWidth(100)
  
    }catch{
      
  }
  }



  return(
<section className='intro'>
 <div className='intro-inner'>
<div className='innerWrap'>
<div className='titleWrap'><h1 className='countryTitle'>Universities</h1></div>
<div className='titleWrap2' style={{display: `${display}`}}><h1 className='countryTitle2'>Choose country</h1></div>


<div className='universities'
   style={{
     overflow:"hidden",
     overflowY: `${scroll}`,
     width: `${width}%`
   }}
   
   >
   {universities.map((item) =>{
     return(
       <a href={item.web_pages[0]}>
         <div className='box'>
         <p className='countryName'>{item.country}</p>
         <h1 className='uniTitle'>{item.name}</h1>
       </div>
       </a>
     )
   })}
   </div>
</div>
   
  
   
   <div className='list'>
     <div className='titleWrap'><h1 className='countryTitle'>Choose country</h1></div>
     <form className='form' onSubmit={SearchClick}>
     <button className='btn' value={"Georgia"} type="submit" onClick={(e) => setCountry(e.target.value)}>Georgia</button>
     <button className='btn' value={"United Kingdom"} type="submit" onClick={(e) => setCountry(e.target.value)}>United Kingdom</button>
     <button className='btn' value={"Ukraine"} type="submit" onClick={(e) => setCountry(e.target.value)}>Ukraine</button>
     <button className='btn' value={"Germany"} type="submit" onClick={(e) => setCountry(e.target.value)}>Germany</button>
     <button className='btn' value={"Turkey"} type="submit" onClick={(e) => setCountry(e.target.value)}>Turkey</button>
     <button className='btn' value={"France"} type="submit" onClick={(e) => setCountry(e.target.value)}>France</button>
     <button className='btn' value={"Italy"} type="submit" onClick={(e) => setCountry(e.target.value)}>Italy</button>
     <button className='btn' value={"Spain"} type="submit" onClick={(e) => setCountry(e.target.value)}>Spain</button>
     <button className='btn' value={"Argentina"} type="submit" onClick={(e) => setCountry(e.target.value)}>Argentina</button>
     <button className='btn' value={"Sweden"} type="submit" onClick={(e) => setCountry(e.target.value)}>Sweden</button>
     </form>
   </div>
 </div>
</section>
  )
}
export default IntroSection;