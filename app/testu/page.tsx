import Project from "@/components/Project/Project";
import ProjectModel from "@/models/project";
import TagModel from "@/models/tag";

import project1Img from "@/public/images/webpage_icon.png";
import project2Img from "@/assests/to-do-app.jpg";
import project3Img from "@/assests/sky-image.jpg";

import { BiLogoPostgresql } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faCaretSquareUp,
} from "@fortawesome/free-solid-svg-icons";

const projectExample = new ProjectModel(
  "Red Beard Meeple Web Page",
  "Its a web page created to show and discuss about tabletop games! testing longer description to see its response",
  { src: project1Img, alt: "Project image representation." },
  [
    new TagModel("Next.js", faJs),
    new TagModel("PostgreSQL", BiLogoPostgresql),
    new TagModel("Prisma", faCaretSquareUp),
  ],
  "https://red-beard-meeple-app.vercel.app/"
);

export default function TestuPage() {
  return (
    <Project
      image={projectExample.image}
      title={projectExample.title}
      description={projectExample.description}
      tags={projectExample.tags}
    />
  );
}
