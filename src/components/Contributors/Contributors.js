import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const contributors = [
  {
    name: "Jayakumar",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Faculty",
  },
  {
    name: "Darshana",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Faculty",
  },
  {
    name: "Pranavdhar",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Student",
  },
  {
    name: "Purushotham",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Student",
  },
  {
    name: "Nikhil",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Student",
  },
  {
    name: "Aaashish",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Student",
  },
  {
    name: "Abhiram",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Student",
  },
];

export default function Contributors() {
  return (
    <Container fluid className="contributors-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Contributors</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are all the contributors who have helped us
        </p> */}
        <Row>
          {[
            ...new Set(contributors.map((contributor) => contributor.type)),
          ].map((type) => (
            <Row>
              <Col md={4} className="contributors-type">
                <h1 className="contributor-type">{type}</h1>
                <Row className="contributors-list">
                  {contributors
                    .filter((contributor) => contributor.type === type)
                    .map((contributor) => (
                      <div class="member">
                        <div class="pic">
                          <img
                            src={contributor.image}
                            class="img-fluid"
                            alt=""
                          />
                        </div>
                        <div class="member-info">
                          <h4>{contributor.name}</h4>
                          <span>{contributor.type}</span>
                          <div class="social">
                            <a href="">
                              <FaTwitter color="#f5f5f5" />
                            </a>
                            <a href="">
                              <FaFacebook color="#f5f5f5" />
                            </a>
                            <a href="">
                              <FaLinkedin color="#f5f5f5" />
                            </a>
                            <a href="">
                              <FaInstagram color="#f5f5f5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </Row>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
