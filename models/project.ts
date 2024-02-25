import { StaticImageData } from "next/image";
import TagModel from "./tag";

class ProjectModel {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  tags?: TagModel[];
  url?: string;

  constructor(
    title: string,
    description: string,
    image: { src: StaticImageData; alt: string },
    tags?: TagModel[],
    url?: string
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.tags = tags;
    this.url = url;
  }
}

export default ProjectModel;
