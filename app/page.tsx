import Presentation from "@/components/Presentation";
import Showroom from "@/components/Showroom/Showroom";
import ProjectModel from "@/models/project";
import project1Img from "@/assests/gloomheaven.jpg";
import project2Img from "@/assests/gymCompanion.jpeg";

const project1 = new ProjectModel(
  "Tabletop Info Scraper",
  "Its an app that will look for tabletop games prices.",
  { src: project1Img, alt: "Project image representation." }
);

const project2 = new ProjectModel(
  "Gym Companion",
  "Its an app that helps creating gym to dos.",
  { src: project2Img, alt: "Project image representation." }
);

const project = project2;

export default function Home() {
  return (
    <>
      <Presentation />
      <Showroom />
    </>
  );
}
