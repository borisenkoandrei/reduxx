import React from "react";
import AcsessoriesItem from "./AcsessoriesItem";

function Accessories(props) {
  function toggleAction(event) {
    event.preventDefault();
    let id = event.target.id;
    props.onToggle(id);
  }

  return (
    <div>
      <ul>
        {props.accessories.map(function(item, index) {
          return (
            <li key={index}>
              <AcsessoriesItem
                item={item}
                toggle={toggleAction}
                acsessoriesChanging={props.acsessoriesChanging}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Accessories;
