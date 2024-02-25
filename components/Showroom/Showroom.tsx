"use client";

import ScrollList from "./ScrollList";
import classes from "@/components/Showroom/Showroom.module.css";

import { BiLogoPostgresql } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faCaretSquareUp,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import project1Img from "@/public/images/webpage_icon.png";
import project2Img from "@/assests/gymCompanion.jpeg";
import project3Img from "@/assests/sky-image.jpg";

import ProjectModel from "@/models/project";
import TagModel from "@/models/tag";

const projectsData = [
  new ProjectModel(
    "Red Beard Meeple Web Page",
    "Its a web page created to show and discuss about tabletop games!",
    { src: project1Img, alt: "Project image representation." },
    [
      new TagModel("Next.js", faJs),
      new TagModel("PostgreSQL", BiLogoPostgresql),
      new TagModel("Prisma", faCaretSquareUp),
    ],
    "https://red-beard-meeple-app.vercel.app/"
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
