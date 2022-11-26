import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();
  console.log(id, "id");

  return (
    <div class="wrapper">
      <div class="scroll-indicator"></div>
      <div class="content-wrapper">
        <div class="content">
          <div class="poster">
            <div className="background-image"></div>
            <div class="poster-title">
              <h1>Blood Donation Camp</h1>
              <div class="line"></div>
            </div>
            <div class="poster-buttons">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="css-i6dzq1"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="block published">
              <div class="mini-title">Published</div>
              23.11.2022
            </div>
            <div class="block published">
              <div class="mini-title">Views</div>3 251
            </div>
            <div class="block published">
              <div class="mini-title">Likes</div>
              156
            </div>
            <div class="block published">
              <div class="mini-title">Reading</div>2 min
            </div>
          </div>
          <div class="words">
            <p>
              Donating blood can be considered as one of the most noble deeds
              that can be done by us. One unit of blood can save up to three
              lives. The requirement for blood is increasing day by daywith an
              increase in diseases. Several lives are lost due to no supply of
              blood. Blood cannot be stored for a long time; therefore it is
              needed that healthy people donate their blood on a regular basis,
              in order to ensure no shortage of blood for the needy ones.
            </p>
            <p>
              Blood donation is one of the noblest and greatest donations a man
              can make. Blood is our life-sap and has no substitute. Several
              lives are lost because of the unavailability of blood. Doctors
              need blood for transfusing it in the body of a person after the
              operation and in similar situations when a lot of blood flows out
              of the person’s body. People should understand that their little
              contribution can prove to be of great help to others in such
              difficult situations.
            </p>
            <p>
              Blood donation is a completely safe process. It includes a blood
              test considering the hemoglobin levels of the donor and the type
              of blood donated then a set of questionnaires for the donor
              regarding his health history. The donor has a test regarding the
              blood stem cells, for his future blood requirements in case of
              emergency and a record is maintained for it.
            </p>
          </div>
          <div class="quote">
            <p> Rakth daan karke toh dekho, ACHHA LAGTA HAI</p>
          </div>
          <div class="author">
            <div class="image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
