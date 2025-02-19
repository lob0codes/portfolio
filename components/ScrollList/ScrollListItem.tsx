import Project from "../Project/Project";
import classes from "@/components/Showroom/ScrollListItem.module.css";
import ProjectModel from "@/models/project";

const ScrollListItem: React.FC<{
  item: ProjectModel;
  activeIndex: number;
  itemIndex: number;
  url?: string;
}> = ({ item, activeIndex, itemIndex, url }) => {
  const scrollItemCLasses =
    activeIndex === itemIndex
      ? `${classes.item}${classes.active}`
      : `${classes.item}`;

  return (
    <div className={scrollItemCLasses}>
      <Project
        id={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
        tags={item.tags}
        url={item.url}
      />
    </div>
  );
};

export default ScrollListItem;
