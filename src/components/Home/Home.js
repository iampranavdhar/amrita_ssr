import React, { useEffect, useState } from "react";
import { Player } from "video-react";
import teaser from "../../Assets/teaser.mp4";

function Home() {
  // const [yearsCount, setYearsCount] = useState(0);
  // const [projectsCount, setProjectsCount] = useState(0);
  // const [studentsCount, setStudentsCount] = useState(0);
  // const [hoursCount, setHoursCount] = useState(0);

  // const yearsTargetNumber = 10;
  // const projectsTargetNumber = 994;
  // const studentsTargetNumber = 5688;
  // const hoursTargetNumber = 272000;

  // // increase all the counters and come to end at the same time using useEffect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (yearsCount < yearsTargetNumber) {
  //       setYearsCount((prevCount) => prevCount + 1);
  //     } else if (yearsCount === yearsTargetNumber) {
  //       clearInterval(interval);
  //     }
  //     if (projectsCount < projectsTargetNumber) {
  //       setProjectsCount((prevCount) => prevCount + 1);
  //     }
  //     if (studentsCount < studentsTargetNumber) {
  //       setStudentsCount((prevCount) => prevCount + 1);
  //     }
  //     if (hoursCount < hoursTargetNumber) {
  //       setHoursCount((prevCount) => prevCount + 1);
  //     }
  //   }, 1);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    document.title = "SSR | Home";
  }, []);

  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container text-center position-relative"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1>Student Social responsibitlity</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            More Info
          </a>
        </div>
      </section>
      <section id="counts" class="counts">
        <div class="container">
          <div class="row counters">
            <div class="col-lg-3 col-6 text-center">
              <span class="purecounter">10+</span>
              <p>Years</p>
            </div>
            <div class="col-lg-3 col-6 text-center">
              <span class="purecounter">994+</span>
              <p>Community Projects</p>
            </div>
            <div class="col-lg-3 col-6 text-center">
              <span class="purecounter">5688+</span>
              <p>Students Involved</p>
            </div>
            <div class="col-lg-3 col-6 text-center">
              <span class="purecounter">272000+</span>
              <p>Student Hours</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="about-section">
        <div class="container">
          <div class="row about-content">
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <h2 className="about-heading">About</h2>
              <h3 className="about-description">
                Giving back to the society whatever little we can, this is the
                small thought that led to this massive community service program
                that we call SSR (Student Social Responsibility). The aim of
                this student driven program is nothing but the well-being of the
                society through various projects. Being able to interact with
                people and bring about solutions for the various problems in
                their daily life is something that the students of Amrita have
                mastered at this young age.
              </h3>
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Player
                className="player"
                playsInline
                muted={true}
                autoPlay={true}
                loop={true}
              >
                <source src={teaser} />
              </Player>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" class="cta">
        <div class="container">
          <div class="text-center" data-aos="zoom-in">
            {/* <h3>Call To Action</h3> */}
            <h3>
              Successful people have a social responsibility to make the world a
              better place and not just take from it.
            </h3>
            {/* <a class="cta-btn" href="#">
              Call To Action
            </a> */}
          </div>
        </div>
      </section>
      <section id="why-ssr" class="why-ssr">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 d-flex align-items-stretch"
              data-aos="fade-right"
            >
              <div class="why-ssr-content">
                <h3>Essense of SSR</h3>
                <p>
                  SSR is Amrita's flagship community outreach program that
                  exposes students to the realities of life. It offers them a
                  unique opportunity to make a real difference in the world
                  outside and practice humanity in their own little ways
                </p>
              </div>
            </div>
            <div class="col-lg-8 d-flex align-items-stretch">
              <div class="icon-boxes d-flex flex-column justify-content-center">
                <div class="row">
                  <div
                    class="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <div class="icon-box mt-4 mt-xl-0">
                      <i class="bx bx-receipt"></i>
                      <h4>Find a Problem</h4>
                      <p>Students try to find a problem in the society</p>
                    </div>
                  </div>
                  <div
                    class="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <div class="icon-box mt-4 mt-xl-0">
                      <i class="bx bx-cube-alt"></i>
                      <h4>Get the Solution</h4>
                      <p>
                        Students get the innovative solution for the problem
                      </p>
                    </div>
                  </div>
                  <div
                    class="col-xl-4 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <div class="icon-box mt-4 mt-xl-0">
                      <i class="bx bx-images"></i>
                      <h4>Make it Live</h4>
                      <p>Put in complete effort to implement the solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
