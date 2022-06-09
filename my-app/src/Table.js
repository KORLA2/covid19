import React from 'react'
import numeral from 'numeral'
import styled from 'styled-components'
export default function Table({tabledata}) {
 
    return (
        
    tabledata.map(({name,cases})=>(
<Container>
   <div>{name}</div>
<div>{numeral(cases).format('0.0a')}</div>

</Container>

    ))

  )
}
let Container=styled.div`
display:flex;
justify-content:space-between;
margin:5px;
height:20px;
background:pink;

`

