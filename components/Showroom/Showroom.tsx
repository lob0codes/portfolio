"use client";

import ScrollList from "./ScrollList";
import classes from "@/components/Showroom/Showroom.module.css";

import { BiLogoPostgresql } from "react-icons/bi";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons";

import project1Img from "@/public/images/webpage_icon.png";
import project2Img from "@/assests/to-do-app.jpg";
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
    "Awesome TO-DO List",
    "Its an experimental app to track a to-do list.",
    { src: project2Img, alt: "Project image representation." },
    [
      new TagModel("Next.js", faJs),
      new TagModel("PostgreSQL", BiLogoPostgresql),
      new TagModel("Prisma", faCaretSquareUp),
    ],
    "https://to-do-list-app-rho-weld.vercel.app/"
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
  return (
    <section className={`container ${classes.showroom}`}>
      <h2>Showroom</h2>
      <ScrollList projects={projectsData} />
    </section>
  );
}
