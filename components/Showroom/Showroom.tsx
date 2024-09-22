"use client";

import ScrollList from "../ScrollList/ScrollList";
import classes from "@/components/Showroom/Showroom.module.css";

import { BiLogoPostgresql } from "react-icons/bi";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import project1Img from "@/public/images/webpage_icon.png";
import project2Img from "@/public/images/to-do-app.jpg";
import project3Img from "@/public/images/lob0-codes-page.jpg";

import ProjectModel from "@/models/project";
import TagModel from "@/models/tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectsData = [
  new ProjectModel(
    "Red Beard Meeple Web Page",
    "Its a web page created to show and discuss about tabletop games!",
    { src: project1Img, alt: "Project image representation." },
    [
      new TagModel("Next.js", faN),
      new TagModel("PostgreSQL", faDatabase),
      new TagModel("Prisma", faCaretSquareUp),
    ],
    "https://red-beard-meeple-app.vercel.app/"
  ),
  new ProjectModel(
    "Awesome TO-DO List",
    "Its an experimental app to track a to-do list.",
    { src: project2Img, alt: "Project image representation." },
    [
      new TagModel("Next.js", faN),
      new TagModel("PostgreSQL", faDatabase),
      new TagModel("Prisma", faCaretSquareUp),
    ],
    "https://to-do-list-app-rho-weld.vercel.app/"
  ),
  new ProjectModel(
    "lob0codes Blog",
    "A space to show interesting things about React, Next.JS and Python",
    {
      src: project3Img,
      alt: "Project image representation.",
    },
    [
      new TagModel("Next.js", faN),
      new TagModel("PostgreSQL", BiLogoPostgresql),
      new TagModel("Prisma", faCaretSquareUp),
    ],
    "https://lobo-codes-blog.vercel.app/"
  ),
];

export default function Showroom() {
  return (
    <section className={`container ${classes.showroom}`}>
      <h2>Showroom</h2>
      <ScrollList projects={projectsData} />
      <FontAwesomeIcon icon="fa-solid fa-n" />
    </section>
  );
}
