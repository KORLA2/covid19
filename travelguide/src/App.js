import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import List from './components/List'
import Map from './components/Map'
import styled from 'styled-components'
import 'leaflet/dist/leaflet.css'
function App() {
  let [center,setcenter]=useState({lat:0,lng:0});
	let [type,settype]=useState("hotels");

let [places,setplaces]=useState([]);
let [rat,setrat]=useState('All');

useEffect(()=>{

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4cf82d34dbmshb8dd745aa0dc714p18f079jsn7fef1a46ae94',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};
fetch(`https://travel-advisor.p.rapidapi.com/${type.toLowerCase()}/list-by-latlng?latitude=12.91285&longitude=100.87808&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US`, options)
	.then(response => response.json())
	.then(response =>{ 
console.log(response)

		if(rat==='All')
		setplaces(response.data) 
		else {
      let pla=response.data.filter((x)=>Number(x.rating)>=Number(rat))
			setplaces(pla);
		}
	
	}
	)
	.catch(err => console.error(err));

},[type,rat])



  useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{setcenter({lat:Number(latitude),lng:Number(longitude)})})
  },[])
  return (
    <div>
<Header/>
<Main>
<List type={type} settype={settype} rat={rat} setrat={setrat} places={places}/>
<Map center={center}   places={places}/>
</Main>

    </div>
  )
}

export default App
let Main=styled.div`
display:grid;
position:fixed;
height:100vh;
width:100vw;
grid-template-columns: 2fr 4fr;
grid-gap:10px;
margin-top:75px;
@media(max-width:700px){
flex-direction:column;
display:flex;
}

`