import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home_banner from "../../Assets/home_banner.png";

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET'S KNOW MORE ABOUT <span className="purple"> SSR</span>
            </h1>
            <p className="home-about-body">
              Giving back to the society whatever little we can, this is the
              small thought that led to this{" "}
              <i>
                <b className="purple">
                  massive community service program that we call SSR (Student
                  Social Responsibility)
                </b>
              </i>
              . The aim of this student driven program is nothing but the
              well-being of the society through various projects. Being able to
              interact with people and bring about solutions for the various
              problems in their daily life is something that the students of
              Amrita have mastered at this young age. The program teaches the
              students how to be socially responsible as citizens. The main
              idea, however, is to inspire - inspire the youth to take this up
              as an example and bring about a change in their own way!
              <br />
            </p>
          </Col>
        </Row>
        {/* <Row>
          <div className="home-banner">
            <div className="banner-data">
              <h2>Strive to build things that make a difference!</h2>
            </div>
          </div>
        </Row> */}
        <Row>
          <div className="home-count-details">
            <div className="count-detail">
              <h1>100+</h1>
              <h5>Projects</h5>
            </div>
            <div className="count-detail">
              <h1>1000+</h1>
              <h5>Volunteers</h5>
            </div>
            <div className="count-detail">
              <h1>100+</h1>
              <h5>Partners</h5>
            </div>
            <div className="count-detail">
              <h1>100+</h1>
              <h5>Events</h5>
            </div>
          </div>
        </Row>
        <Row>
          <Col className="home-video">
            <div className="home-video-teaser">
              <iframe
                width="1080"
                height="607"
                src="https://www.youtube.com/embed/vUDdlcvaxa4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
