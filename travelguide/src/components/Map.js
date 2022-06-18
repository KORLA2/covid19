import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import  {Paper} from '@material-ui/core'
import draw from './draw'
export default function Map({center,places})
{
 return( 
<Container>
<MapContainer
  className="markercluster-map"
  center={center}
  zoom={10}
  maxZoom={18}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'


  />

{
draw(places)

}
</MapContainer>
</Container>

)
  }
let Container=styled.div`
height:100vh;
/* position:absolute; */
z-index:1;
.leaflet-container
{
height:100%;

}

`