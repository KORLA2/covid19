import {useState,UseEffect, useEffect} from 'react'
import { FormControl,Select,MenuItem } from '@material-ui/core'
import './components.css'
import Map from './Map'
import 'leaflet/dist/leaflet.css'
import numeral from 'numeral'
import styled from 'styled-components'
import Sort from './sort'
import Char from './Line'
import InfoBox from './Info'
import Table from "./Table"
export default function App(){
function   setting(dat){
setinfo({
cases:dat.cases,
recovered:dat.recovered,
deaths:dat.deaths,
tcases:dat.todayCases,
trecovered:dat.todayRecovered,
tdeaths:dat.todayDeaths,
})

}
let [tdata,settdata]=useState([]);
let [countries,setcountries]=useState([]);
let [country,setcountry]=useState(["WorldWide"]);
let  [info,setinfo]=useState([]);
let [zoom,setzoom]=useState([5]);
let [mcountries,mapcountries]=useState([]);
let [directions,set]=useState({lat:20.5937,lng: 78.9629});
let [Type,setType]=useState('cases');
useEffect(()=>{

fetch("https://disease.sh/v3/covid-19/all").then(res=>res.json()).then(dat=>


setting(dat))
},[])

useEffect(()=>{
let set=async()=>{
  await  fetch("https://disease.sh/v3/covid-19/countries").then(res=>res.json()).then(data=>{
 let countries=data.map(cont=>({
name:cont.country,
value:cont.countryInfo.iso2,

}

))
setcountries(countries);
let  tdata=data.map(dat=>({
  name:dat.country,
 cases: dat.cases,
}


))
Sort(tdata)
settdata(tdata);
mapcountries(data);
})
}
set();
},[])


return (
<div className='app'>

<div className="app_left">
<div className='flx'>
<h3>Covid 19</h3>
<FormControl>

<Select variant='outlined' value="worldwide" onChange={(event)=>{
setcountry(event.target.value)

fetch(`https://disease.sh/v3/covid-19/countries/${event.target.value}`).then(res=>res.json()).then(dat=>{setting(dat)
set([dat.countryInfo.lat,dat.countryInfo.long])
setzoom(5)
}
)

}} >
<MenuItem value="worldwide">{country}</MenuItem>
{

countries.map((cont)=>(
<MenuItem value={cont.name}>
{cont.name}
</MenuItem>


)
)

}
</Select>

</FormControl>
</div>
<div className="flx">
<InfoBox 
    active ={Type==='cases'}
 onClick={
  (e)=>{
    
    setType('cases')
  }
}  className="rec" title="Cases" present={numeral(info.tcases).format('0a')} total={numeral(info.cases).format('0a')}/>

<InfoBox  
      active={Type==='recovered'}
onClick={
  (e)=>{setType('recovered')
;}
}   className="rec" title="Recovered" present={numeral(info.trecovered).format('0a')} total={numeral(info.recovered).format('0a')} />


<InfoBox 
      active={Type==='deaths'}
onClick={
  (e)=>{setType('deaths')
    

  }
}   className="rec"  title="Deaths" present={numeral(info.tdeaths).format('0a')} total={numeral(info.deaths).format('0a')} />
</div>
<Map  type={Type} countries={mcountries} center={directions} zoom={zoom}/>

</div>


<div className="app_right">
<Container>

<Table  tabledata={tdata}/>  
</Container>
<Char  casesType={Type}/>

</div>

</div>
)
}
let Container=styled.div`
height:400px;
overflow-y:scroll;
`