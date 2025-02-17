import TagModel from "./tag";

class ProjectModel {
  id: number;
  title: string;
  description: string;
  image: { src: string; alt: string };
  tags?: TagModel[];
  url?: string;

  constructor(
    id: number,
    title: string,
    description: string,
    image: { src: string; alt: string },
    tags?: TagModel[],
    url?: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.tags = tags;
    this.url = url;
  }
}

export default ProjectModel;
