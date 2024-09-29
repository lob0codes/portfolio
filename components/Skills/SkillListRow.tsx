import classes from "@/components/Skills/SkillListRow.module.css";
import Skill from "./Skill";
import { ReactNode } from "react";

import SkillModel from "@/models/skill";

interface SkillsListRowProps {
  header: string;
  headerBgColor: string;
  skills: SkillModel[];
}

export default function SkillsListRow({
  header,
  headerBgColor,
  skills,
}: SkillsListRowProps) {
  return (
    <div className={classes.row}>
      <header
        className={classes.header}
        style={{ backgroundColor: headerBgColor }}
      >
        {header}
      </header>

      <div className={classes.content}>
        {skills && skills.length > 0
          ? skills.map((skill) => (
              <Skill image={skill.image} key={skill.name} />
            ))
          : null}
      </div>
    </div>
  );
}
