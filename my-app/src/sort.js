import React from 'react'
import styled from 'styled-components'
import {Circle ,Popup} from 'react-leaflet'
import numeral from 'numeral'
 export default function sort(tdata) {
return tdata.sort((a,b)=>a.cases>b.cases?-1:1 )
}
let type={

    cases:{
        color:'pink',
        fcolor:'red',
    },
    recovered:{
     color:'green',
        fcolor:'red',
    },
    deaths:{
        color:'red',
        fcolor:'red'
    },

}


export let  draw =(countries,casesType)=>

(
console.log(type[casesType].color),
countries.map((country)=>(

<Circle
center={[country.countryInfo.lat,country.countryInfo.long]}
fillOpacity={0.5}
color={type[casesType].color}
fillColor={type[casesType].fcolor}
radius={Math.sqrt(country[casesType])*100}

>
<Popup>
<Container>
<Flag

    style={
        {
            background:`url(${country.countryInfo.flag})`
    }
    }
/>
<Country>{country.country}</Country>
<Cases>Cases:{numeral(country.cases).format('0.00a')}</Cases>
<Recovered>Recovered:{numeral(country.recovered).format('0a')}</Recovered>

<Total> Deaths:{numeral(country.deaths).format('0a')}</Total>
</Container>
 
</Popup>

</Circle>

))
)
let Container=styled.div`
height:250px;
width:200px;


`
let Country=styled.div`
text-align:center;
`
let Flag=styled.div`
width:200px;
background-size:100% 100%;
height:150px;
${'' /* border-radius:4px; */}
background-repat:no-repeat;
${'' /* background-position:cover; */}

`
let Cases=styled.div``
let Recovered=styled.div``
let Total=styled.div``