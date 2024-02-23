import { StaticImageData } from "next/image";
import TagModel from "./tag";

class ProjectModel {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  tags?: TagModel[];

  constructor(
    title: string,
    description: string,
    image: { src: StaticImageData; alt: string },
    tags?: TagModel[]
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.tags = tags;
  }
}

export default ProjectModel;
