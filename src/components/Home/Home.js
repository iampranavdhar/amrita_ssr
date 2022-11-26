import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home_banner from "../../Assets/home_banner.png";
import teaser from "../../Assets/teaser.mp4";
import { Player } from "video-react";

function Home() {
  return (
    <div fluid className="home-about-section" id="about">
      <div>
        <div className="video-component">
          <div className="video-background">
            <Player playsInline muted={true} autoPlay={true} loop={true}>
              <source src={teaser} />
            </Player>
          </div>
          <div className="video-overlay"></div>
          <div className="video-foreground">
            <Row>
              <Col md={8} className="video-foreground-content">
                <h1 style={{ fontSize: "2.6em" }}>
                  <span
                    style={{
                      color: "#f9a826",
                    }}
                  >
                    LET'S KNOW MORE ABOUT SSR
                  </span>
                </h1>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          <div className="home-count-details">
            <div className="count-detail">
              <h1>10+</h1>
              <h5>YEARS</h5>
            </div>
            <div className="count-detail">
              <h1>994+</h1>
              <h5>COMMUNITY PROJECTS</h5>
            </div>
            <div className="count-detail">
              <h1>5688+</h1>
              <h5>STUDENTS INVOLVED</h5>
            </div>
            <div className="count-detail">
              <h1>272000+</h1>
              <h5>STUDENT HOURS</h5>
            </div>
          </div>
        </Row>
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
      </div>
    </div>
  );
}

export default Home;
