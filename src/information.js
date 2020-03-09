import React from "react";

export default function Information(props) {
  return (
    <React.Fragment>
      <div className="info">
        <div className="text-info">
          <h1>
            The world's <br />
            biggest healthcare platform
          </h1>
          <p>
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
          <img src="https://www.docplanner.com/img/sygnet.png" className="inforamtion-image"/>
        {props.Infoelemnt.map(el=>
        <div className={el.Klass}>
           <img src={el.logo1}></img>
           <h3>{el.titre}</h3>
           <p>{el.text}</p> 
           </div>
            )}
        </div>
      </div>
      <div className="improve">
    <h1>Improve the lives of millions. <br/> Change yours forever</h1>
    <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
</div>
    </React.Fragment>
  );
}