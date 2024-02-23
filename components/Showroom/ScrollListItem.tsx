import Project from "../Project/Project";
import classes from "@/components/Showroom/ScrollListItem.module.css";
import ProjectModel from "@/models/project";

const ScrollListItem: React.FC<{
  item: ProjectModel;
  activeIndex: number;
  itemIndex: number;
}> = ({ item, activeIndex, itemIndex }) => {
  const scrollItemCLasses =
    activeIndex === itemIndex
      ? `${classes["scroll-list__item"]}${classes.active}`
      : `${classes["scroll-list__item"]}`;

  return (
    <div className={scrollItemCLasses}>
      <Project
        image={item.image}
        title={item.title}
        description={item.description}
        tags={item.tags}
      />
    </div>
  );
};

export default ScrollListItem;
