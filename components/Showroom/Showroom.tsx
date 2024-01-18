"use client";

import ScrollList from "./ScrollList";
import classes from "@/components/Showroom/Showroom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import project1Img from "@/assests/gloomheaven.jpg";
import project2Img from "@/assests/gymCompanion.jpeg";
import project3Img from "@/assests/sky-image.jpg";

import ProjectModel from "@/models/project";

const projectsData = [
  new ProjectModel(
    "Tabletop Info Scraper (Placeholder)",
    "Its an app that will look for tabletop games prices.",
    { src: project1Img, alt: "Project image representation." }
  ),
  new ProjectModel(
    "Gym Companion (Placeholder)",
    "Its an app that helps creating gym to dos.",
    { src: project2Img, alt: "Project image representation." }
  ),
  new ProjectModel(
    "Observatory Landig Page (Placeholder)",
    "Landing page of a business.",
    {
      src: project3Img,
      alt: "Project image representation.",
    }
  ),
];

export default function Showroom() {
  const [activeIndex, setActiveIndex] = useState(0);

  function rightArrowClickHandler() {
    if (activeIndex === projectsData.length - 1) {
      return;
    }

    setActiveIndex((prevIndex) => {
      return prevIndex + 1;
    });
  }

  function leftArrowClickHandler() {
    if (activeIndex === 0) {
      return;
    }

    setActiveIndex((prevIndex) => {
      return prevIndex - 1;
    });
  }

  return (
    <section className={`block ${classes.showroom}`}>
      <h2 className={classes.showroom__title}>Showroom</h2>
      <div className={classes.showroom__content}>
        <div onClick={leftArrowClickHandler}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={classes["previous-project"]}
          />
        </div>
        <ScrollList activeIndex={activeIndex} projects={projectsData} />
        <div onClick={rightArrowClickHandler}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={classes["next-project"]}
          />
        </div>
      </div>
    </section>
  );
}
