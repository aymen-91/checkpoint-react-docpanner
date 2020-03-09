import React from 'react'
function Card(props){
    return(
        <div className="container" >  
     { props.cardElement.map(el => 
        <div className={el.classe}>
         
           <p>
            {el.title}
            </p>
            <p>
            {el.paragraph} 
            </p>
            {!el.Select?null:
         <select>
            <option>chosse a country</option>
               
            {el.Select.map(ele =><option> {ele}</option>)}

            </select>
               }
             <img src={el.image} className="cardtimage" />
        </div>)
        
        }
        </div>
    )
}

export default Card