"use client";

import axios from "axios";

import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import project1Img from "@/public/images/webpage_icon.png";
import project2Img from "@/public/images/to-do-app.jpg";
import project3Img from "@/public/images/lob0-codes-page.jpg";

import ScrollList from "../ScrollList/ScrollList";
import classes from "@/components/Showroom/Showroom.module.css";
import ProjectModel from "@/models/project";
import TagModel from "@/models/tag";

import { useEffect, useState } from "react";
import { title } from "process";

interface DbProject {
  title: string;
  description: string;
  image: string;
}

const iconsMapping = {
  nextJs: faN,
  postgreSql: faDatabase,
  prisma: faCaretSquareUp,
};

// const projectsData = [
//   new ProjectModel(
//     "Red Beard Meeple Web Page",
//     "Its a web page created to show and discuss about tabletop games!",
//     { src: project1Img, alt: "Project image representation." },
//     [
//       new TagModel("Next.js", iconsMapping["nextJs"]),
//       new TagModel("PostgreSQL", iconsMapping["postgreSql"]),
//       new TagModel("Prisma", iconsMapping["prisma"]),
//     ],
//     "https://red-beard-meeple-app.vercel.app/"
//   ),
//   new ProjectModel(
//     "Awesome TO-DO List",
//     "Its an experimental app to track a to-do list.",
//     { src: project2Img, alt: "Project image representation." },
//     [
//       new TagModel("Next.js", iconsMapping["nextJs"]),
//       new TagModel("PostgreSQL", iconsMapping["postgreSql"]),
//       new TagModel("Prisma", iconsMapping["prisma"]),
//     ],
//     "https://to-do-list-app-rho-weld.vercel.app/"
//   ),
//   new ProjectModel(
//     "lob0codes Blog",
//     "A space to show interesting things about React, Next.JS and Python",
//     {
//       src: project3Img,
//       alt: "Project image representation.",
//     },
//     [
//       new TagModel("Next.js", iconsMapping["nextJs"]),
//       new TagModel("PostgreSQL", iconsMapping["postgreSql"]),
//       new TagModel("Prisma", iconsMapping["prisma"]),
//     ],
//     "https://lobo-codes-blog.vercel.app/"
//   ),
// ];

export default function Showroom() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/projects/");
        console.log(response.data);
        const projectList = response.data.map((project: DbProject) => {
          return new ProjectModel(project.title, project.description, {
            src: project.image,
            alt: "Project image representation.",
          });
        });
        console.log("HIIII");
        console.log(projectList);
        setProjects(projectList);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("Unknown error happened getting the portfolio projects.");
        }
      }
    };

    getProjects();
  }, []);

  return (
    <section className={`container ${classes.showroom}`}>
      <h2>Showroom</h2>
      <ScrollList projects={projects} />
    </section>
  );
}
