import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-wrap">
        <div className="card-logo">
          {props.logo === "img" ? (
            <img src={props.img} alt={props.name} />
          ) : (
            <i className={props.fa} />
          )}
        </div>
        <div className="card-name">{props.name}</div>
        <div className="card-bar">
          <div className="fill" style={{ width: `${props.per}` }}></div>
          <span>{props.per}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
