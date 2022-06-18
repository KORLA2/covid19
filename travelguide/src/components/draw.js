import React from 'react'
import {Circle} from 'react-leaflet'

function draw(places) {

    
  return (
    
    places?.map((place)=>(

<Circle
center={[place.latitude,place.longitude]}
fillOpacity={0.5}
color={'pink'}
fillColor={'red'}
radius={100}

>
</Circle>
    ))


    )
}

export default draw