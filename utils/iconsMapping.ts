import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCaretSquareUp,
  faDatabase,
  faN,
} from "@fortawesome/free-solid-svg-icons";

import { faAws, faReact } from "@fortawesome/free-brands-svg-icons";

const iconsMapping: { [key: string]: IconDefinition } = {
  nextJs: faN,
  postgreSql: faDatabase,
  prisma: faCaretSquareUp,
  aws: faAws,
  react: faReact,
  django: faDatabase,
};

export default iconsMapping;
