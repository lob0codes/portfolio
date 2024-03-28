"use client";

import classes from "@/components/ScrollList/ScrollList.module.css";
import ProjectModel from "@/models/project";

import { useEffect, useState } from "react";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "../Project/Project";
import ScrollListArrow from "./ScrollListArrow";

interface ScrollListProps {
  projects: ProjectModel[];
}

export default function ScrollList({ projects }: ScrollListProps) {
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

  function anchorClickHandler(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    url: string | undefined
  ) {
    if (url === "") {
      event.preventDefault();
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
          {projects.map((project) => (
            <a
              href={project.url}
              onClick={(event) => anchorClickHandler(event, project.url)}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
            >
              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
              />
            </a>
          ))}
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
