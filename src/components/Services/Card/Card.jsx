import React from "react";
import "./Card.css";

const Card = ({label, para}) => {

  return (
    <div className="card">
      <h3 style={{backgroundColor: 'white',textTransform: 'uppercase', fontSize: '1.3rem'}}>{label}</h3>
      <br />
      <p style={{backgroundColor: 'white'}}>
        {para}
      </p>
    </div>
  );
};

export default Card;
