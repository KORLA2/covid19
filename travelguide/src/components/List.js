import PlaceItems from './Place'
import React , {useEffect, useState}from 'react'
import styled from 'styled-components'
import {FormControl,Select,MenuItem, InputLabel} from '@material-ui/core'
import Place from './Place'
function List({type,settype,rat,setrat,places}) {

  return (
 
<Items>
<div className="form">
 <FormControl className="frm">
 <InputLabel>Select</InputLabel>
<Select  value={type} onChange={(e)=>{settype(e.target.value)}}>

<MenuItem value="restaurants">Restaurants</MenuItem>

<MenuItem value="hotels">Hotels</MenuItem>

<MenuItem value="attractions">Attractions</MenuItem>
</Select>
</FormControl>
<FormControl>
<Select  value={rat} onChange={(e)=>{setrat(e.target.value)}}>

<MenuItem value="All">All</MenuItem>
<MenuItem value="3.0">Above 3.0</MenuItem>
<MenuItem value="4.5">Above 4.5</MenuItem>
</Select>
</FormControl>
</div>
<div>

{

places?.map((place,i)=>{
  return(

<Place place={place}/>
  )
})

}

</div>

</Items> 
    )
}

export default List
let Items=styled.div`
height:100vh;
overflow-y:scroll;
background:rgba(0,0,0,0.4);
.form{
display:flex;
justify-content:space-around;
align-items:center;
}
.grid{
display:grid;

}
`
