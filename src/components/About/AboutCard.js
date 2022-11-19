import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We might know what we{" "}
            <span className="purple">have to do </span>
            but do we know what was
            <span className="purple"> done already.</span>
            <br />
            So here the website that lets you know the{" "}
            <span className="purple">latest</span> and{" "}
            <span className="purple">greatest</span> in the world of{" "}
            <span className="purple">Amrita</span>. Lets see what we have done
            till now.
            <br />
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              <span className="purple"> 100+ </span> Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> 50+ </span> Members
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> 10+ </span> Events
            </li>
            <li className="about-activity">
              <ImPointRight /> <span className="purple"> 5+ </span> Workshops
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
