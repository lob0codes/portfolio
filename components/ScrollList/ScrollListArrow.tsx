import classes from "@/components/ScrollList/ScrollListArrow.module.css";
import ProjectModel from "@/models/project";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { cn } from "@/lib/utils";

function isListAtBoundary(
  activeItem: number,
  list: ProjectModel[],
  arrowType: string
): boolean {
  if (activeItem === 0 && arrowType === "previous") {
    return true;
  } else if (activeItem === list.length - 1 && arrowType === "next") {
    return true;
  } else {
    return false;
  }
}

interface ScrollListArrowProps {
  activeItem: number;
  projects: ProjectModel[];
  arrowType: string;
  onClick: () => void;
  className: string;
}

export default function ScrollListArrow({
  activeItem,
  projects,
  arrowType,
  onClick,
  className,
}: ScrollListArrowProps) {
  let arrowContent;

  if (arrowType === "previous") {
    arrowContent = (
      <FontAwesomeIcon
        icon={faArrowLeft}
        className={cn(
          classes.icon,
          isListAtBoundary(activeItem, projects, arrowType)
            ? classes["icon-off"]
            : classes["icon-previous-on"]
        )}
        onClick={onClick}
      />
    );
  } else {
    arrowContent = (
      <FontAwesomeIcon
        icon={faArrowRight}
        className={cn(
          classes.icon,
          isListAtBoundary(activeItem, projects, arrowType)
            ? classes["icon-off"]
            : classes["icon-next-on"]
        )}
        onClick={onClick}
      />
    );
  }

  return <section className={className}>{arrowContent}</section>;
}
