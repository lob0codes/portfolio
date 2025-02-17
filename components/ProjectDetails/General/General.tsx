import classes from "@/components/ProjectDetails/General/General.module.css";
import GeneralList from "./GeneralList";

interface GeneralProps {
  generalData: {
    description: string;
    challenges: { id: number; title: string }[];
    nextSteps: { id: number; title: string }[];
  };
}

const challengesList = [
  "Making the app responsive to smaller screens.",
  'Make the shadcn component "Popover" adjust its position based on its position.',
  'Defining "TodoList" component, how to handle completed to-dos, deleting a to-do, etc.',
];

const nextStepsList = [
  "Adding authentication workflow to store to-do lists and persist them.",
  "Adding the capability of dragging and dropping items within same categories.",
];

export default function General({ generalData }: GeneralProps) {
  return (
    <div className={classes["general"]}>
      <section className={classes.description}>
        <h2>Description</h2>
        <p className={classes["description-text"]}>
          {generalData?.description}
        </p>
      </section>
      <GeneralList title="Challenges" items={generalData?.challenges} />
      <GeneralList title="Next-Steps" items={generalData?.nextSteps} />
    </div>
  );
}
