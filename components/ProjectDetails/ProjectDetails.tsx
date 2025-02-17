"use client";

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import Tabs from "./Tabs";
import classes from "./ProjectDetails.module.css";
import ProjectDetailsModel from "@/models/projectDetails";

function mapDbProjectDetailsToFrontEndProjectDetails(response: AxiosResponse) {
  const data = response.data;
  return new ProjectDetailsModel(
    data.project_id,
    data.project_name,
    data.description,
    data.challenges,
    data.next_steps
  );
}

export default function ProjectDetails({ projectId }: { projectId: string }) {
  const [dbProjectDetails, setDbProjectDetails] =
    useState<ProjectDetailsModel | null>(null);

  useEffect(() => {
    const getProjectDetails = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const projectDetailsUrl = `${baseUrl}projects/${projectId}/`;
      const response = await axios.get(projectDetailsUrl);

      const projectDetails: ProjectDetailsModel =
        mapDbProjectDetailsToFrontEndProjectDetails(response);

      setDbProjectDetails(projectDetails);
    };

    getProjectDetails();
  }, [projectId]);

  return (
    <article className={classes["project-details"]}>
      <h2 className={classes.title}>{dbProjectDetails?.projectName}</h2>
      <Tabs projectDetailsData={dbProjectDetails} />
    </article>
  );
}
