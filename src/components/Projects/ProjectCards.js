import React from "react";
import food from "../../Assets/food.jpeg";
import heartOutline from "../../Assets/heart-outline.png";
import heartFill from "../../Assets/heart-fill.png";

export default function Card(props) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-title-group">
          <h5 className="project-card-title">{props.name}</h5>
          <p className="project-card-category">{props.category}</p>
        </div>
      </div>
      <img className="project-card-image" src={props.imgPath} alt="Logo" />
      <div className="project-card-text">
        {props.description.length > 100
          ? props.description.substring(0, 100) + "..."
          : props.description}
      </div>
      <div className="project-card-footer">
        <div className="project-card-footer-bar">
          <div>
            {props.liked ? (
              <img
                className="project-card-like-icon"
                src={heartFill}
                alt="Logo"
              />
            ) : (
              <img
                className="project-card-like-icon"
                src={heartOutline}
                alt="Logo"
              />
            )}
            <b className="likes-count">{220}</b>
          </div>
          <div className="project-card-date">{props.year}</div>
        </div>
      </div>
    </div>
  );
}
