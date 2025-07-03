import classes from "@/components/Skills/SkillListRow.module.css";
import Skill from "./Skill";
import { Skeleton } from "@/components/ui/skeleton";

import SkillModel from "@/models/skill";

interface SkillsListRowProps {
  header: string;
  headerBgColor: string;
  skills: SkillModel[];
  isLoading?: boolean;
}

export default function SkillsListRow({
  header,
  headerBgColor,
  skills,
  isLoading = false,
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
        {isLoading
          ? Array.from({ length: 2 }).map((_, idx) => (
              <Skeleton
                key={idx}
                style={{ width: 100, height: 70, marginRight: 12 }}
              />
            ))
          : skills && skills.length > 0
          ? skills.map((skill) => (
              <Skill image={skill.image} key={skill.name} />
            ))
          : null}
      </div>
    </div>
  );
}
