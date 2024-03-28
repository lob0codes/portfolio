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

  function anchorClickHandler(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    if (url === "") {
      event.preventDefault();
    }
  }

  return (
    <div className={scrollItemCLasses}>
      <a
        href={url}
        onClick={anchorClickHandler}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Project
          image={item.image}
          title={item.title}
          description={item.description}
          tags={item.tags}
        />
      </a>
    </div>
  );
};

export default ScrollListItem;
