"use client";

import classes from "@/components/Showroom/ScrollList.module.css";
import ProjectModel from "@/models/project";
import { useEffect, useState } from "react";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "../Project/Project";

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

  useEffect(() => {
    // Calculate new scroll offset based on the active item and scroll adjustment
    const newScrollOffset = -activeItem * scrollAdjustment;
    console.log(activeItem);
    console.log(newScrollOffset);
    setScrollOffset(newScrollOffset);
  }, [activeItem, scrollAdjustment]);

  return (
    <article className={classes["scroll-list"]}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={classes["previous"]}
        onClick={previousItemHandler}
      />
      <section className={classes["content-container"]}>
        <div
          className={`${classes["content"]}`}
          style={{
            transform: `translateX(${scrollOffset}rem)`,
          }}
        >
          {projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      <FontAwesomeIcon
        icon={faArrowRight}
        className={classes["next"]}
        onClick={nextItemHandler}
      />
    </article>
  );
}
