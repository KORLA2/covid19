import React from 'react'
import styled from 'styled-components'
import {draw} from './sort'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
export default function Map({type,countries,center,zoom})
{


 return( 
<Container>
<MapContainer
  className="markercluster-map"
  center={center}
  zoom={zoom}
  maxZoom={18}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  {
    draw(countries,type)
    }
</MapContainer>
</Container>

)
  }
let Container=styled.div`
height:500px;

.leaflet-container
{
height:100%;

}

`