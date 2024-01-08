import classes from "@/components/Project/Tag.module.css";
import { faPython } from "@fortawesome/free-brands-svg-icons/faPython";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tag() {
  return (
    <article className={classes.tag}>
      <h4 className={classes.tag__header}>Python</h4>
      <FontAwesomeIcon icon={faPython} className={classes.tag__icon} />
    </article>
  );
}
