export interface ProjectDetailType {
  id: number;
  projectName: string;
  description: string;
  challenges: ChallengeType[];
  nextSteps: NextStepType[];
}

export interface ChallengeType {
  id: number;
  title: string;
}

export interface NextStepType {
  id: number;
  title: string;
}
