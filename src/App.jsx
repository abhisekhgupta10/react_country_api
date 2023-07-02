import React, { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import Spinner from './Spinner'
const App = () => {
  const[country,setCountry]=useState([])
  const[isLoading,setLoading] = useState(true)
  const[filtered,setFiltered] = useState("")
 
const fetchCallApi = async ()=>{
  
  const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    console.log(data)
    setCountry(data)
  
    setLoading(false)
}


  useEffect(()=>{
    fetchCallApi()

  },[])

  return (
      <>
      <div className="container">
      <input type="text" className='form-control m-3 shadow' onChange={(e)=>setFiltered(e.target.value)} placeholder='search your country...' />
      </div>
      <div className="container-fluid">
      <div className="row p-5 justify-content-center align-items-center">
         {isLoading?<Spinner/>:null}

          {country.sort((country1,country2)=>{
            country1= country1.name.common
            country2= country2.name.common
            if(country1<country2){
              return -1;

            }else if( country1>country2){
              return 1;
            }
            return 0;
          }).filter((countri)=>{
            return filtered===''?countri:countri.name.common.includes(filtered)
          }).map(countri=>{
            return<>
        <Card name={countri.name.common} src={countri.flags.png} capital={countri.capital} area={countri.area} population={countri.population} continent={countri.region} time={countri.timezones}/>
</>
          })}
        
      </div>
      </div>
      </>
  )
}

export default App