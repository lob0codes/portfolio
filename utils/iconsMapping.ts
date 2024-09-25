import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretSquareUp,
  faDatabase,
  faN,
} from "@fortawesome/free-solid-svg-icons";

const iconsMapping: { [key: string]: IconDefinition } = {
  nextJs: faN,
  postgreSql: faDatabase,
  prisma: faCaretSquareUp,
};

export default iconsMapping;
