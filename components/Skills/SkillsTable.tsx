"use client";

import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

import classes from "@/components/Skills/SkillsTable.module.css";
import SkillModel from "@/models/skill";
import { ExperienceLevel } from "@/types/enums/ExperienceLevel";
import SkillsListRow from "./SkillListRow";

interface DbSkill {
  name: string;
  image: string;
  experience: ExperienceLevel;
}

function mapDbSkillsToSkillModel(response: AxiosResponse) {
  return response.data.map((skill: DbSkill) => {
    return new SkillModel(skill.name, skill.image, skill.experience);
  });
}

export default function SkillsTable() {
  const [skills, setSkills] = useState<{ [key: string]: SkillModel[] }>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSkills = async () => {
      try {
        // local
        // const response = await axios.get("http://127.0.0.1:8000/api/skills/");
        // prod
        const response = await axios.get(
          "https://lob0codes.pythonanywhere.com/api/skills/"
        );

        console.log(response.data);

        const skills: SkillModel[] = mapDbSkillsToSkillModel(response);

        const skillsByExperience: { [key: string]: SkillModel[] } = {};
        console.log(skillsByExperience);
        skills.forEach((skill) => {
          if (!skillsByExperience[skill.experience]) {
            skillsByExperience[skill.experience] = [];
          }
          skillsByExperience[skill.experience].push(skill);
        });

        console.log(skillsByExperience);
        setSkills(skillsByExperience);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("Unknown error happened getting the portfolio projects.");
        }
      }
    };

    getSkills();
  }, []);

  return (
    <article className={classes["skills-table"]}>
      <SkillsListRow
        header="Proficient"
        headerBgColor="#FF6347"
        skills={skills["Proficient"]}
      />
      <SkillsListRow
        header="Intermediate"
        headerBgColor="#FFA500"
        skills={skills["Intermediate"]}
      />
      <SkillsListRow
        header="Beginner"
        headerBgColor="#32CD32"
        skills={skills["Beginner"]}
      />
    </article>
  );
}
