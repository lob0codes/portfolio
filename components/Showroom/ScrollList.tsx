import classes from "@/components/Showroom/ScrollList.module.css";
import ScrollListItem from "./ScrollListItem";
import ProjectModel from "@/models/project";
import Link from "next/link";

const ScrollList: React.FC<{
  activeIndex: number;
  projects: ProjectModel[];
}> = ({ activeIndex, projects }) => {
  return (
    <div className={classes["scroll-list"]}>
      {projects.map((project, index) => (
        <ScrollListItem
          key={index}
          item={project}
          activeIndex={activeIndex}
          itemIndex={index}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default ScrollList;
