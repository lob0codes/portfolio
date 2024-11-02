import classes from "@/components/ProjectDetails/General/General.module.css";
import GeneralList from "./GeneralList";

const challengesList = [
  "Making the app responsive to smaller screens.",
  "Make the shadcn component &quot;Popover&quot; adjust its position based on its position.",
  "Defining &quot;TodoList&quot; component, how to handle completed ones, deleting a todo, etc.",
];

const nextStepsList = [
  "Adding authentication workflow to store to-do lists and persist them.",
  "Adding the capability of dragging and dropping items within same categories.",
];

export default function General() {
  return (
    <div className={classes["general"]}>
      <section className={classes.description}>
        <h2>Description</h2>
        <p className={classes["description-text"]}>
          This is a project that consists in creating a to-do list, where each
          task can be mark as completed and the app will move it to the
          completed section. Tasks put in completed can be unchecked and it will
          be moved back to the pending section.
        </p>
      </section>
      <GeneralList title="Challenges" items={challengesList} />
      <GeneralList title="Next-Steps" items={nextStepsList} />
    </div>
  );
}
