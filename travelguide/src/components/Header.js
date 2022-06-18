import React from 'react'
import styled  from 'styled-components'
import Search from '@material-ui/icons/Search'
function Header() {
  return (
  <Head>

<span>
    Travel Advisory
</span>
<div className='input'>
<div className="search">

<Search/>
</div>
<input type="text" placeholder='Search places'/>

</div>

  </Head>

  )
}

export default Header
let Head=styled.div`
height:60px;
position:fixed;
top:0px;
z-index:100;
width:100vw;
 background :rgb(162, 33, 162);
 padding:5px 15px;
display:flex;
justify-content: space-around;
align-items:center;
span{
font-size:25px;
color:white;

}
.input{
    align-items:center;
.search{
position:absolute;
left:-10px;
height:20px;
}

position:relative;
display:flex;
input{
padding:5px 20px;
margin-left:-10px;
font-size:20px;
}


}

`
