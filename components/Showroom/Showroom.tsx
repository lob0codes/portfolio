"use client";

import axios, { AxiosResponse } from "axios";

import { useEffect, useState } from "react";

import classes from "@/components/Showroom/Showroom.module.css";
import ScrollList from "../ScrollList/ScrollList";
import ProjectModel from "@/models/project";
import TagModel from "@/models/tag";
import iconsMapping from "@/utils/iconsMapping";

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

export default function Showroom() {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        // Local
        // const response = await axios.get("http://127.0.0.1:8000/api/projects/");

        // Prod
        const response = await axios.get(
          "https://lob0codes.pythonanywhere.com/api/projects/"
        );

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
    <section className={`container ${classes.showroom}`}>
      <h2 className={classes.title}>Showroom</h2>
      {error ? (
        <p>There are no projects to show!!!</p>
      ) : (
        <ScrollList projects={projects} />
      )}
    </section>
  );
}
