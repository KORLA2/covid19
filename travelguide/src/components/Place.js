import React from 'react'
import {Card,CardMedia,CardContent,Typography,Chip, CardActions, Button} from '@material-ui/core'
import Loc from '@material-ui/icons/LocationOnOutlined'
import Phone from '@material-ui/icons/Phone'
import './place.css'
import Rating from '@material-ui/lab/Rating'
let places;
function Place({place}) {
console.log(place)

  return (
    <div>
    {place?.name&&(
  <Card elevation={6}>
<CardMedia
style={{height:300}}
image={place.photo?place.photo.images.large.url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5kThOsZVO9-ivRYVhUihiXjkcCPrLD92vTw&usqp=CAU'}
title={place.name}
/>
<CardContent>
<div className='flex'>
<Rating  value={Number(place.rating) } readOnly   />
<Typography  gutterBottom variant='h6' > out of {place.num_reviews} reviews</Typography>

</div>
    <Typography gutterBottom variant='h5' >{place.name}</Typography>
<div className='flex'>
<Typography  variant='subtitle1' >Price</Typography>
<Typography  gutterBottom variant='h6' >{place.price_level}</Typography>

</div>
<div className='flex'>
<Typography  variant='h5' >Ranking</Typography>
<Typography gutterBottom  variant='h6' >{place.ranking}</Typography>

</div>
{
place?.awards?.map((award)=>(
<div className='flex'>
<img src={award.images.small} alt={award.dispaly_name}/>
<Typography variant="subtitle2" color= "text-secondary">{award.display_name}</Typography>
</div>
))

}
{
place?.cuisine?.map(({name})=>(
<Chip  key={name}  label={name} size="small"  className="flex"/>

))
}


{
  
  place?.address&&(
    <Typography gutterBottom variant="subtitle2" className="flex">
<Loc/>
{place.address}
    </Typography>

  )


}

{
  
  place?.phone&&(
    <Typography gutterBottom variant="subtitle2"  className="flex">
<Phone/>
{place.phone}
    </Typography>

  )


}

<CardActions>
<Button size="large" color="secondary" onClick={()=>{window.open(place.web_url,'_blank')}}>
Travel

</Button>
<Button onClick={()=>{window.open(place.website,'_blank')}}>
  Website
</Button>
</CardActions>


</CardContent>


</Card>


    )}
    </div>
  )
}

export default Place