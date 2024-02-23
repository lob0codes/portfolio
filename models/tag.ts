import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconType } from "react-icons";

class TagModel {
  name: string;
  icon: IconProp | IconType;

  constructor(name: string, icon: IconProp | IconType) {
    this.name = name;
    this.icon = icon;
  }
}

export default TagModel;
