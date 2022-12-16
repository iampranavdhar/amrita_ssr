import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  const [projectDetails, setProjectDetails] = useState([]);
  const [teamDetails, setTeamDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [projectImages, setProjectImages] = useState([]);

  const fetchImagesFromGithub = async () => {
    setProjectImages([]);
    for (let i = 1; i < 6; i++) {
      setProjectImages((prev) => [
        ...prev,
        `https://raw.githubusercontent.com/pranav2k2k/photos/main/img/${id}/${id}_IMG${i}.jpeg`,
      ]);
    }
  };

  console.log(projectImages, "iomages");

  useEffect(() => {
    setProjectImages([]);
    setProjectDetails([]);
    const fetchProjectDetails = async () => {
      const response = await axios.get(
        `http://amritassr.azurewebsites.net/projects/team/${id}/`
      );
      console.log(response.data);
      setProjectDetails(response.data["Project Details"]);
      setTeamDetails(response.data["Team Details"]);
      setTimeout(() => {
        setIsLoading(false);
      });
    };
    fetchProjectDetails();
    fetchImagesFromGithub();
  }, [id]);

  console.log(projectDetails);
  console.log(teamDetails);

  useEffect(() => {
    document.title = `Project | ${id}`;
  }, []);

  return isLoading ? (
    <div className="loading_screen">
      <div className="loader">
        <Bars
          height="80"
          width="80"
          color="rgba(222, 130, 235, 0.911)"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  ) : (
    <div className="wrapper">
      <div className="scroll-indicator"></div>
      <div className="content-wrapper">
        <div className="content">
          <div className="poster">
            <div className="background-image">
              <img src={projectImages[0]} alt="" />
            </div>
            <div className="overlay"></div>
            <div className="poster-title">
              <h1>{projectDetails.name}</h1>
              <div className="line"></div>
            </div>
            <div className="poster-buttons">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="block published">
              <div className="mini-title">Published</div>
              23.11.2022
            </div>
            <div className="block published">
              <div className="mini-title">Views</div>3 251
            </div>
            <div className="block published">
              <div className="mini-title">Likes</div>
              156
            </div>
            <div className="block published">
              <div className="mini-title">Reading</div>2 min
            </div>
          </div>
          <div className="words">
            <p>
              <strong className="project-details-sub-heading">
                Mentor: {projectDetails.mentor}
              </strong>
            </p>
            <p>
              <strong className="project-details-sub-heading">
                Project Description
              </strong>
            </p>
            <p>{projectDetails.description}</p>
            <p>
              <strong className="project-details-sub-heading">
                Team Members
              </strong>
            </p>
            <table className="team-members-table">
              <tr>
                <th>Member Name</th>
                <th>Roll Number</th>
              </tr>
              {teamDetails.map((teamMember) => (
                <tr>
                  <td>{teamMember.name}</td>
                  <td>{teamMember.roll}</td>
                </tr>
              ))}
            </table>
            <p>
              <strong className="project-details-sub-heading">Gallery</strong>
            </p>
            <div className="image-gallery">
              {projectImages.map((image) => (
                <div className="image">
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
            <p>
              <strong className="project-details-sub-heading">
                Project Video
              </strong>
            </p>
            <div className="project_video">
              <iframe
                width="560"
                height="315"
                src={projectDetails.youtubeLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
