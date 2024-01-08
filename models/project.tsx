import { StaticImageData } from "next/image";

class ProjectModel {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };

  constructor(
    title: string,
    description: string,
    image: { src: StaticImageData; alt: string }
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

export default ProjectModel;
