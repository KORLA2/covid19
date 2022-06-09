import  styled from "styled-components"
import './info.css'
import {Card,CardContent,Typography} from '@material-ui/core'
export default function InfoBox({title,present,active,total,...props}){

return (

<Card  onClick={props.onClick}  className = {`rec ${ active&&title }`}  >
<CardContent>
<Typography color="textPrimary" > {title} </Typography>
<Container>

<h3>Today:</h3>
<Typography color='textPrimary' className="text"> +{present}</Typography>
</Container>
<Container>
<h3>Total:</h3>
<Typography color="textPrimary"> {total}</Typography>
</Container>
</CardContent>
</Card>
)

}

let Container=styled.div`
display:flex;
height:50px;
align-items:center;
h3{
    margin:2px;
}

`
