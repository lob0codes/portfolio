"use client";

import classes from "@/app/testu2/page.module.css";
import Project from "@/components/Project/Project";
import ProjectModel from "@/models/project";
import TagModel from "@/models/tag";
import iconsMapping from "@/utils/iconsMapping";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

interface DbProject {
  title: string;
  description: string;
  image: string;
  tags: DbTag[];
  url: string;
}

interface DbTag {
  name: string;
  icon: string;
}

function mapDbProjectsToShowroomProjects(response: AxiosResponse) {
  return response.data.map((project: DbProject) => {
    const image = {
      src: project.image,
      alt: "Project image representation",
    };

    const dbProjectTags: DbTag[] = project.tags;
    let projectTags: TagModel[] = [];

    if (dbProjectTags.length > 0) {
      projectTags = dbProjectTags.map((tag: DbTag) => {
        return new TagModel(tag.name, iconsMapping[tag.icon]);
      });
    }

    return new ProjectModel(
      project.title,
      project.description,
      image,
      projectTags,
      project.url
    );
  });
}

export default function ProjectDetailsPage() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const projectsUrl = `${baseUrl}projects/`;

        const response = await axios.get(projectsUrl);

        const showRoomProjects: ProjectModel[] =
          mapDbProjectsToShowroomProjects(response);

        setProjects(showRoomProjects);
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
    <div className={classes.page}>
      <Project
        title={"Testing details and page links."}
        description="This is a test of new components in project components."
        url="https://lobo-codes-blog.vercel.app/"
        image={{ src: "/images/lob0-codes-page.jpg", alt: "Project image" }}
        tags={[
          new TagModel("Prisma", iconsMapping.prisma),
          new TagModel("PostgreSQL", iconsMapping.postgreSql),
          new TagModel("Next.js", iconsMapping.nextJs),
        ]}
      />
    </div>
  );
}
