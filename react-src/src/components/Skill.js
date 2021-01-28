import React from "react";

export default function Skill(props) {
  return (
    <div className="skill">
      <div className="skill-logo">
        <i className={props.fa} />
      </div>
      <div className="skill-name">{props.name}</div>
    </div>
  );
}
