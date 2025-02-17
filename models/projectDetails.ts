import { ChallengeType, NextStepType } from "@/types/ProjectDetailsTypes";

class ProjectDetailsModel {
  id: number;
  projectName: string;
  description: string;
  challenges: ChallengeType[];
  nextSteps: NextStepType[];

  constructor(
    id: number,
    projectName: string,
    description: string,
    challenges: ChallengeType[],
    nextSteps: NextStepType[]
  ) {
    this.id = id;
    this.projectName = projectName;
    this.description = description;
    this.challenges = challenges;
    this.nextSteps = nextSteps;
  }
}

export default ProjectDetailsModel;
