import classes from "@/components/Project/Tag.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconType } from "react-icons";

interface TagProps {
  name: string;
  icon: IconProp | IconType;
}

export default function Tag({ name, icon }: TagProps) {
  const renderIcon = () => {
    if (typeof icon === "object") {
      // Font Awesome icon
      return (
        <FontAwesomeIcon
          icon={icon as IconProp}
          className={classes.tag__icon}
        />
      );
    } else {
      // React icon
      const IconComponent = icon as IconType;
      return <IconComponent className={classes.tag__icon} />;
    }
  };

  return (
    <article className={classes.tag}>
      {renderIcon()}
      <h4 className={classes.tag__header}>{name}</h4>
    </article>
  );
}
