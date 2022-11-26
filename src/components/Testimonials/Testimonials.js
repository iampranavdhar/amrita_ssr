import React, { useState } from "react";
import { Container } from "react-bootstrap";

const testimonials_data = [
  {
    id: 1,
    testimonial_content:
      "Psychologically, almost all of them were slaves - slaves of faith, slaves of their own kind, slaves of passions, slaves of greed. And if, by the will of fate, one of them was born or became a master, he did not know what to do with his freedom. He again hurried to become a slave - a slave of wealth, unnatural excesses, a slave of dissolute friends, a slave of his slaves.",
    author: "Steve Jobs",
    author_occupation: "Apple Founder",
    author_image: "",
  },
  {
    id: 2,
    testimonial_content:
      "Psychologically, almost all of them were slaves - slaves of faith, slaves of their own kind, slaves of passions, slaves of greed. And if, by the will of fate, one of them was born or became a master, he did not know what to do with his freedom. He again hurried to become a slave - a slave of wealth, unnatural excesses, a slave of dissolute friends, a slave of his slaves.",
    author: "Bill Gates",
    author_occupation: "Microsoft Founder",
    author_image: "",
  },
  {
    id: 3,
    testimonial_content:
      "Psychologically, almost all of them were slaves - slaves of faith, slaves of their own kind, slaves of passions, slaves of greed. And if, by the will of fate, one of them was born or became a master, he did not know what to do with his freedom. He again hurried to become a slave - a slave of wealth, unnatural excesses, a slave of dissolute friends, a slave of his slaves.",
    author: "Sundhar Pichai",
    author_occupation: "Google CEO",
    author_image: "",
  },
];

function Testimonials() {
  return (
    <Container fluid className="testimonials-section">
      <Container>
        <h1 className="testimonial-heading">Testimonials</h1>
      </Container>
      <div className="testimonials">
        {testimonials_data.map((testimonial) => (
          <section class="testimonial-section">
            <div class="testimonial-data">
              <div class="testimonial-userpic"></div>
              <div class="testimonial-qmark">&#10077;</div>
              <div class="testimonial-pattern"></div>
              <div class="testimonial-content">
                <blockquote class="testimonial-text">
                  {testimonial.testimonial_content}
                </blockquote>
                <div class="testimonial-meta">
                  <div class="testimonial-meta-info">
                    <div class="testimonial-author">
                      <cite>{testimonial.author}</cite>
                    </div>
                    <div class="testimonial-source">
                      <span>{testimonial.author_occupation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}

export default Testimonials;
