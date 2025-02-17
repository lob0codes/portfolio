"use client";

import classes from "@/components/ProjectDetails/Tabs.module.css";
import { useState } from "react";

import General from "@/components/ProjectDetails/General/General";
import { cn } from "@/lib/utils";
import Technologies from "./Technologies/Technologies";
import Gallery from "./Gallery/Gallery";
import { ProjectDetailType } from "@/types/ProjectDetailsTypes";
import ProjectDetailsModel from "@/models/projectDetails";

type TabName = "general" | "technologies" | "gallery";

export default function Tabs({
  projectDetailsData,
}: {
  projectDetailsData: ProjectDetailsModel | null;
}) {
  const generalData = {
    description: projectDetailsData?.description || "",
    challenges: projectDetailsData?.challenges || [],
    nextSteps: projectDetailsData?.nextSteps || [],
  };

  const tabContent: Record<TabName, JSX.Element> = {
    general: <General generalData={generalData} />,
    technologies: <Technologies projectId={projectDetailsData?.id} />,
    gallery: <Gallery projectId={projectDetailsData?.id} />,
  };

  const [selectedTab, setSelectedTab] = useState<TabName>("general");

  function tabSelectionHandler(tabName: TabName) {
    setSelectedTab(tabName);
  }

  return (
    <div className={classes.tabs}>
      <ul className={classes.menu}>
        <li
          className={cn(
            classes["menu-item"],
            selectedTab == "general" && classes["active-item"]
          )}
          onClick={() => {
            tabSelectionHandler("general");
          }}
        >
          General
        </li>
        <li
          className={cn(
            classes["menu-item"],
            selectedTab == "technologies" && classes["active-item"]
          )}
          onClick={() => {
            tabSelectionHandler("technologies");
          }}
        >
          Technologies
        </li>
        <li
          className={cn(
            classes["menu-item"],
            selectedTab == "gallery" && classes["active-item"]
          )}
          onClick={() => {
            tabSelectionHandler("gallery");
          }}
        >
          Gallery
        </li>
      </ul>
      <section className={classes.content}>{tabContent[selectedTab]}</section>
    </div>
  );
}
