import React from "react";

export default function Player(props) {
  return (
    <div>
      <li>
        {props.name} (score: {props.score})
        <button onClick={() => props.changescores(props.id, +1)}>+</button>
        <button onClick={() => props.changescores(props.id, -1)}>-</button>
      </li>
    </div>
  );
}
