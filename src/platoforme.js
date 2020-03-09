import React from 'react'
function Platform(props){
    return(


   <div className="platfrom"> 
   <p>we are globaly company with local culture</p>
   <ul> 
       {props.PlatoformeElements.map(
           el => <li>
               <svg xmlns={el.svgadrees} viewBox={el.svgviewBox} width="167" height="32"> <path d={el.path}></path></svg> 
           </li>
       )}

  
     
   </ul>
   </div>
      
    )    
}
export default Platform