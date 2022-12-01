import React from "react"
 
export default function Star(props){
  let setFinalIcon = props.isFilled ?  "https://cdn-icons-png.flaticon.com/512/616/616656.png" : "https://cdn-icons-png.flaticon.com/512/616/616822.png"
  
  return(
  <img 
  src={setFinalIcon} 
  className="card--favorite"
  onClick={props.handle}
/>
)
}