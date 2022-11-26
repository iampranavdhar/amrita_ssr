import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import radio_amrita from "../../Assets/Projects/radio_amrita.jpeg";
import blood_donation_camp from "../../Assets/Projects/blood_donation_camp.jpeg";
import tech_awareness from "../../Assets/Projects/tech_awareness.jpeg";
import { Link } from "react-router-dom";

const projects_data = [
  {
    id: 1,
    title: "Blood Donation Camp",
    description:
      "Blood Donation Camp is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives.",
    imgPath: blood_donation_camp,
    year: "2022",
    category: "Health",
    mentors: "Dr. Suresh Kumar, Dr. Prem Kumar",
    likes: 10,
  },
  {
    id: 2,
    title: "Radio Amrita",
    description:
      "Radio Amrita is a student run radio station of Amrita Vishwa Vidyapeetham, Amritapuri. It is a platform for the students to showcase their talents and to learn the art of broadcasting.",
    imgPath: radio_amrita,
    year: "2022",
    category: "Entertainment",
    mentors: "Dr. Suresh Kumar, Dr. Prem Kumar",
    likes: 25,
  },
  {
    id: 3,
    title: "Technical Awareness Program",
    description:
      "Technical Awareness Program is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives.",
    imgPath: tech_awareness,
    year: "2022",
    category: "Technical",
    mentors: "Dr. Suresh Kumar, Dr. Prem Kumar",
    likes: 45,
  },
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  console.log(selectedCategory);
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          SSR Recent<strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "#242424" }}>
          Here are a few projects that we worked on recently.
        </p>
        <Col className="project-filters">
          <p className="projects-filter-heading">Filter by</p>
          <div style={{ display: "flex" }}>
            <div className="projects-filter-dropdown">
              <p className="projects-filter-dropdown-text">Category</p>
              <div className="select">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All</option>
                  {[
                    ...new Set(
                      projects_data.map((project) => {
                        return project.category;
                      })
                    ),
                  ].map((category, index) => {
                    return (
                      <option value={category} key={index}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="projects-filter-dropdown">
              <p className="projects-filter-dropdown-text">Year</p>
              <div className="select">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="all">All</option>
                  {[
                    ...new Set(
                      projects_data.map((project) => {
                        return project.year;
                      })
                    ),
                  ].map((year, index) => {
                    return (
                      <option value={year} key={index}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </Col>
        <Row style={{ justifyContent: "flext-start", paddingBottom: "10px" }}>
          {projects_data
            .sort((a, b) => b.likes - a.likes)
            .filter((project) => {
              if (selectedCategory.toLocaleLowerCase() === "all")
                return project;
              else if (
                project.category.toLocaleLowerCase() ===
                selectedCategory.toLocaleLowerCase()
              )
                return project;
            })
            .map((project, index) => (
              <Col md={4} key={index}>
                <Link
                  to="/project/1"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ProjectCard
                    imgPath={project.imgPath}
                    title={project.title}
                    description={project.description}
                    year={project.year}
                    category={project.category}
                    mentors={project.mentors}
                    likeCount={project.likes}
                  />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
