import React, { useEffect, useState } from "react";
import food from "../../Assets/food.jpeg";
import heartOutline from "../../Assets/heart-outline.png";
import heartFill from "../../Assets/heart-fill.png";
import axios from "axios";
import projectImage from "../../Assets/projectImage.jpg";

export default function Card(props) {
  const [bannerImage, setBannerImage] = useState([]);
  const fetchImageFromGithub = async () => {
    let img_url = `https://raw.githubusercontent.com/pranav2k2k/photos/main/img/${props.projectId}/${props.projectId}_IMG1.jpeg`;
    const res = await axios(img_url, {
      method: "HEAD",
    });
    if (res.status === 200) {
      setBannerImage(img_url);
    } else {
      setBannerImage(projectImage);
    }
  };

  useEffect(() => {
    setBannerImage([]);
    fetchImageFromGithub();
  }, [props.projectId]);

  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-card-title-group">
          <h5 className="project-card-title">{props.name}</h5>
          <p className="project-card-category">
            {props.category.map((item, index) => {
              return (
                <span key={index}>
                  {item} {index !== props.category.length - 1 ? " | " : ""}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <img className="project-card-image" src={bannerImage} alt="Logo" />
      <div className="project-card-text">
        {props.description.length > 200
          ? props.description.substring(0, 200) + "..."
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
