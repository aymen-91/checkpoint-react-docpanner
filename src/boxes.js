import React from 'react'
function Boxes (props){
    return(

        

           <ul className='main-box'>
                { props.BoxesElement.map(el => 
                <li>
                        <img src={el.image} />
                        <div className="box-part2">
                        <p>{el.capitale}</p>
                        <button>see opening</button>
                        </div>
                </li>
                )}
            </ul>           
       
    )
}
export default Boxes