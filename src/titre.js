import React from 'react'

function Titre(props){
    return (

 
    <div className="Titre">
    <img src={props.imageLogo}/>
    <div className="blog">
    <article>
        We want patients to find the perfect doctor and book an appointment in the most easy way. 
        The patient journey should be enjoyable, 
        and that's why we are always next to them: to help them find the best possible care. Anytime,
         anywhere.
    </article>
    <article>
    We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors
are able not only to improve their online presence, but also to
devote their time to what really matters: their patients.
</article>
</div>
    </div>
   
       )
}
export default Titre