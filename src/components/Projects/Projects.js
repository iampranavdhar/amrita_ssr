import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import radio_amrita from "../../Assets/Projects/radio_amrita.jpeg";
import tech_awareness from "../../Assets/Projects/tech_awareness.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Bars } from "react-loader-spinner";

// const projects_data = [
//   {
//     id: 1,
//     name: "Blood Donation Camp",
//     description:
//       "Blood Donation Camp is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives.",
//     imgPath: blood_donation_camp,
//     year: "2022",
//     category: "Health",
//     mentors: "Dr. Suresh Kumar, Dr. Prem Kumar",
//     likes: 10,
//   },
//   {
//     id: 2,
//     name: "Radio Amrita",
//     description:
//       "Radio Amrita is a student run radio station of Amrita Vishwa Vidyapeetham, Amritapuri. It is a platform for the students to showcase their talents and to learn the art of broadcasting.",
//     imgPath: radio_amrita,
//     year: "2022",
//     category: "Entertainment",
//     mentors: "Dr. Suresh Kumar, Dr. Prem Kumar",
//     likes: 25,
//   },
//   {
//     id: 3,
//     name: "Technical Awareness Program",
//     description:
//       "Technical Awareness Program is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives. It is a platform where people can donate blood and save lives.",
//     imgPath: tech_awareness,
//     year: "2022",
//     category: "Technical",
//     mentors: "Dr. Suresh Kumar, Dr. Prem Kumar",
//     likes: 45,
//   },
// ];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mentors, setMentors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState("All");
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All");
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios("https://amritassr.azurewebsites.net/projects/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProjects(res?.data?.Projects);
      setMentors([
        ...new Set(
          res?.data?.Projects?.map((array_set) => {
            return array_set;
          })
            ?.map((set_of_20) =>
              set_of_20.map((project) => {
                return project.mentor;
              })
            )
            ?.flat()
        ),
      ]);
      setCategories([
        ...new Set(
          res?.data?.Projects.map((array_set) => {
            return array_set;
          })
            .map((set_of_20) =>
              set_of_20.map((project) => {
                return project.category;
              })
            )
            .map((category) => {
              return category.flat();
            })
            .flat()
        ),
      ]);
      setYears([
        ...new Set(
          res?.data?.Projects.map((array_set) => {
            return array_set;
          })
            .map((set_of_20) =>
              set_of_20.map((project) => {
                return project.year;
              })
            )
            .flat()
        ),
      ]);
    };
    fetchProjects();
    setTimeout(() => setLoading(false), 4000);
  }, []);

  useEffect(() => {
    document.title = "SSR | Projects";
  }, []);

  return loading ? (
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
                  {categories.map((category, index) => {
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
              <p className="projects-filter-dropdown-text">Mentor</p>
              <div className="select">
                <select
                  value={selectedMentor}
                  onChange={(e) => setSelectedMentor(e.target.value)}
                >
                  <option value="all">All</option>
                  {mentors?.map((mentor_name, index) => {
                    return (
                      <option value={mentor_name} key={index}>
                        {mentor_name}
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
                  {years?.map((year, index) => {
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
          {selectedMentor.toLowerCase() === "all"
            ? projects[currentPage]
                // .sort((a, b) => b.likes - a.likes)
                ?.filter((project) => {
                  if (selectedCategory.toLocaleLowerCase() === "all") {
                    if (project.name.toLocaleLowerCase() === "yettoupdate") {
                      return;
                    }
                    return project;
                  } else if (
                    project.category
                      .map((category) => category.toLowerCase())
                      .includes(selectedCategory.toLowerCase())
                  ) {
                    if (project.name.toLocaleLowerCase() === "yettoupdate") {
                      return;
                    }
                    return project;
                  }
                })
                .map((project, index) => (
                  <Col md={4} key={index}>
                    <Link
                      to={`/project/${project.projectId}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <ProjectCard
                        projectId={project.projectId}
                        name={project.name}
                        description={project.description}
                        year={project.year}
                        category={project.category}
                        mentors={project.mentors}
                        likeCount={project.likes}
                      />
                    </Link>
                  </Col>
                ))
            : projects
                .flat()
                .filter((project) => {
                  if (project.name.toLocaleLowerCase() === "yettoupdate") {
                    return;
                  } else if (selectedCategory.toLowerCase() === "all") {
                    return (
                      project.mentor.toLowerCase() ===
                      selectedMentor.toLowerCase()
                    );
                  }
                  return (
                    project.mentor.toLowerCase() ===
                      selectedMentor.toLowerCase() &&
                    project.category
                      .map((category) => category.toLowerCase())
                      .includes(selectedCategory.toLowerCase())
                  );
                })
                ?.map((project, index) => (
                  <Col md={4} key={index}>
                    <Link
                      to={`/project/${project.projectId}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <ProjectCard
                        name={project.name}
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
        {selectedMentor.toLowerCase() === "all" ? (
          <Row>
            <div className="projects-pagination">
              <div
                className="projects-pagination-button"
                onClick={() => {
                  if (currentPage > 0) setCurrentPage(currentPage - 1);
                }}
              >
                <GrFormPrevious className="pagination_icon" color="#fff" />
              </div>
              <div className="projects-pagination-button number_indicator">
                <p>
                  {currentPage + 1} of {projects.length}
                </p>
              </div>
              <div
                className="projects-pagination-button"
                onClick={() => {
                  if (currentPage < projects.length - 1)
                    setCurrentPage(currentPage + 1);
                }}
              >
                <GrFormNext className="pagination_icon" color="#fff" />
              </div>
            </div>
          </Row>
        ) : null}
      </Container>
    </Container>
  );
}

export default Projects;
