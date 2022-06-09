import {Line} from 'react-chartjs-2'
import React,{useEffect,useState} from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import numeral from "numeral";
import styled  from 'styled-components'
let  options={
elements:{

  legend:false,
points:{

    radius:0,
},
},

tooltips:{

    mode:"index",
intersect:true,
callbacks:{

label:function (tool,dat){
return numeral(tool.value).format("0a")

}
},

},


scale:{
xAxes:[
    {
        type:"time",
       time:{
        format:"DD/MM/YY",
        tooltipformat:'ll'
    },
},
],
yAxes:[
{
gridLines:{
    dispaly:true,
},

ticks:{
callback:function(val,ind,vs) {
    return numeral(val).format('0a')
}

}

}


],

}

}
export default function Char({casesType}) {
  let [data,setdata]=useState({});
  useEffect(()=>{


      fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120').then(res=>res.json()).then(data=> {


     setdata(build(data,casesType));

     });
  },[])
  

    function build(data,casesType){
    let chartdata=[],last;
   for(let date in data[casesType]){
 
  if(last){
chartdata.push({
    x:date,
    y:data[casesType][date]-last,
})
  }
  
  
  last=data[casesType][date];
}
return chartdata;


}



  return (
    <>
<h4> World Wide cases</h4>

{
(
  
<Line
options={options}
data={
    {
datasets: [{
backgroundColor:'red',
borderColor:'pink',
data:data,
}
]

    }
}

/>
  )
}
</>
  )
}

