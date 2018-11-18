import React from "react";
import { Hero } from "../components/Hero";
import { AnimatedSection } from "../components/AnimatedSection";
import { Summary, Card, Gallery } from "../components/Course";
import { Registration } from "../components/Registration";
import { css } from "emotion";

const summaryItems = [
  { title: "start", info: "april 14th" },
  { title: "duration", info: "3 months" },
  { title: "parts", info: "24 lessons" },
  { title: "projects", info: "6 projects" }
];

const aboutCourse =
  "You will learn fundamentals of interior design, tools and theories used to kickstart your career in this space you will learn fundamentals of interior design, tools and theories used to kickstart your career in this space interior design, tools and theories used to kickstart your career in this space you will learn fundamentals of interior design, tools and theories used to kickstart your career in this space fundamentals of interior design, tools and theories used to kickstart your career in this space interior design, tools and theories used to kickstart your career in this.";

const projects = [
  { title: "Galaxy project", src: "meteor-dribbble.jpg" },
  { title: "Galaxy project1", src: "meteor-dribbble-1.jpg" },
  { title: "Galaxy project2", src: "meteor-dribbble-2.jpg" },
  { title: "Galaxy project3", src: "meteor-dribbble-3.jpg" },
  { title: "Galaxy project4", src: "meteor-dribbble-4.jpg" },
  { title: "Galaxy project5", src: "meteor-dribbble-5.jpg" }
];

const teacherCard = {
  imgSrc: "undraw_teacher.svg",
  text:
    "You will learn fundamentals of interior design, tools and theories used to kickstart your career in this space you will learn fundamentals of interior design, tools and theories used to kickstart your career in this space interior design, tools and theories used to kickstart your career in this space",
  title: "Your teacher",
  subTitle: "Name Surname"
};

const Graphic = () => (
  <div>
    <Hero title1="Graphic" title2="Design" linkText="Register" />
    <AnimatedSection>
      <div
        className={css`
          padding: 40px 20px;
        `}
      >
        <Summary summaryItems={summaryItems} />
        <Card text={aboutCourse} title={`About the course`} />
        <Gallery projects={projects} />
        <Card {...teacherCard} />
      </div>
    </AnimatedSection>
    <Registration />
  </div>
);

export default Graphic;
