import classes from "@/components/Skills/SkillsSection.module.css";
import SkillsTable from "./SkillsTable";

export default function SkillsSection() {
  return (
    <section className={`container ${classes["skills-section"]}`}>
      <h2 className={classes.title}>Skills</h2>
      <SkillsTable />
    </section>
  );
}
