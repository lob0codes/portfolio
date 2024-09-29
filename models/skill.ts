import { ExperienceLevel } from "@/types/enums/ExperienceLevel";

class SkillModel {
  name: string;
  image: string;
  experience: ExperienceLevel;

  constructor(name: string, image: string, experience: ExperienceLevel) {
    this.name = name;
    this.image = image;
    this.experience = experience;
  }
}

export default SkillModel;
