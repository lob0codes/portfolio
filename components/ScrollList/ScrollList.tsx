"use client";

import classes from "@/components/ScrollList/ScrollList.module.css";
import ProjectModel from "@/models/project";

import { useEffect, useState } from "react";

import Project from "../Project/Project";
import ProjectSkeleton from "../Project/ProjectSkeleton";
import ScrollListArrow from "./ScrollListArrow";

interface ScrollListProps {
  projects: ProjectModel[];
  isLoading?: boolean;
}

export default function ScrollList({
  projects,
  isLoading = false,
}: ScrollListProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollAdjustment, setScrollAdjustment] = useState(43.8);

  useEffect(() => {
    function updateScrollAdjustment() {
      const windowWidth = window.innerWidth;

      if (windowWidth > 550) {
        setScrollAdjustment(43.8);
      } else if (windowWidth > 390 && windowWidth <= 550) {
        setScrollAdjustment(33.8);
      } else {
        setScrollAdjustment(28.8);
      }
    }

    updateScrollAdjustment();

    window.addEventListener("resize", updateScrollAdjustment);

    return () => window.removeEventListener("resize", updateScrollAdjustment);
  }, []);

  useEffect(() => {
    // Calculate new scroll offset based on the active item and scroll adjustment
    const newScrollOffset = -activeItem * scrollAdjustment;
    setScrollOffset(newScrollOffset);
  }, [activeItem, scrollAdjustment]);

  function nextItemHandler() {
    if (activeItem !== projects.length - 1) {
      setActiveItem((prevActiveItem) => prevActiveItem + 1);
    }
  }

  function previousItemHandler() {
    if (activeItem !== 0) {
      setActiveItem((prevActiveItem) => prevActiveItem - 1);
    }
  }

  return (
    <article className={classes["scroll-list"]}>
      <ScrollListArrow
        activeItem={activeItem}
        projects={projects}
        arrowType="previous"
        onClick={previousItemHandler}
        className={classes.previous}
      />
      <section className={classes["content-container"]}>
        <div
          className={`${classes["content"]}`}
          style={{
            transform: `translateX(${scrollOffset}rem)`,
          }}
        >
          {isLoading ? (
            <ProjectSkeleton />
          ) : projects.length === 0 ? (
            <div>No projects found.</div>
          ) : (
            projects.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                url={project.url}
              />
            ))
          )}
        </div>
      </section>
      <ScrollListArrow
        activeItem={activeItem}
        projects={projects}
        arrowType="next"
        onClick={nextItemHandler}
        className={classes.next}
      />
    </article>
  );
}
