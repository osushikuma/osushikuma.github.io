import React from "react";

export default function Tool(props) {
  return (
    <div className="tool">
      <div className="tool-logo">
        {props.fa ? (
          <i className={props.fa} />
        ) : (
          <img src={props.img} alt={props.name} />
        )}
      </div>
      <div className="tool-name">{props.name}</div>
      <div className="tool-bar">
        <div className="fill" style={{ width: `${props.per}` }}></div>
        <span>{props.per}</span>
      </div>
    </div>
  );
}
