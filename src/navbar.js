import React from 'react'

function Navbar(props){
    return(

     <ul className="bar">
        <li>
            <ul className="bar1">
              <li  ><img src={props.imageLogo}/></li>
              <li >{props.navbarItems[0].title}</li>
            </ul>
        </li>
 
       <li className="bar2"><ul className="bar-items">
            {props.navbarItems.map(el => <ul className="dropButton" ><li>{el.title}
            {!el.drop?null:<ul className="dropmenu">{el.drop.map(ele=><li>{ele}</li>)}</ul> 
            }
            </li></ul>)}
            </ul>
        </li>
     </ul>
      
    )    
}
export default Navbar