import React from "react";
import Detail from "./Detail";

function Cards(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.imgURL} alt="avatar_img" />
      </div>

      <div className="bottom">
        <div className="info">
          <Detail detailInfo={props.phone} />
          <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
