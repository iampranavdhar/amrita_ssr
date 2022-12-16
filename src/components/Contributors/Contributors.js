import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const contributors = [
  {
    name: "Jayakumaran Annasamy",
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
    image:
      "https://user-images.githubusercontent.com/73348574/207888224-80d3c29a-6353-481b-9f83-fc2b3c988ebe.jpeg",
    type: "Student",
  },
  {
    name: "Purushotham",
    image:
      "https://user-images.githubusercontent.com/73072684/207894688-75267fb0-afa9-46f2-8a92-9b094b4c4aaf.jpeg",
    type: "Student",
  },
  {
    name: "Nikhil",
    image:
      "https://user-images.githubusercontent.com/80596222/207889475-22767333-13c5-4699-836f-bea58d208ee1.jpeg",
    type: "Student",
  },
  {
    name: "Aaashish",
    image:
      "https://user-images.githubusercontent.com/80596222/207894841-4099945e-fd21-47a7-894b-3f8848add188.jpeg",
    type: "Student",
  },
  {
    name: "Abhiram",
    image:
      "https://user-images.githubusercontent.com/80596222/207889611-059dc569-3f9d-496d-a302-35d7936a1afe.jpeg",
    type: "Student",
  },
  {
    name: "Anindh",
    image:
      "https://user-images.githubusercontent.com/80596222/207890606-4207d52f-2780-41ee-9639-e24b6b6676f1.jpeg",
    type: "Student",
  },
  {
    name: "Jayesh",
    image:
      "https://user-images.githubusercontent.com/73348574/207894206-95fe2e1a-a1ef-4058-a355-8a84156e3ca9.png",
    type: "Student",
  },
  {
    name: "Umesh",
    image:
      "https://user-images.githubusercontent.com/80596222/207895043-e206d27a-7f04-4550-988e-029bdec99f15.jpg",
    type: "Student",
  },
  {
    name: "Ghanashyam",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Student",
  },
  {
    name: "Aaditya",
    image:
      "https://user-images.githubusercontent.com/80596222/207889439-7bbf0b04-f5bc-496c-9777-8893d802ec75.jpg",
    type: "Student",
  },
  {
    name: "Ravi Teja",
    image: "https://avatars.githubusercontent.com/u/55010599?v=4",
    type: "Student",
  },
  {
    name: "Vamsi",
    image:
      "https://user-images.githubusercontent.com/80596222/207889489-94a49985-f5b6-4d3b-8ed0-4256b94b4525.jpg",
    type: "Student",
  },
];

export default function Contributors() {
  useEffect(() => {
    document.title = "SSR | Contributors";
  }, []);
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
