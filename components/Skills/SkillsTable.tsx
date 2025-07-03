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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const skillsUrl = `${baseUrl}skills/`;

        const response = await axios.get(skillsUrl);

        const skills: SkillModel[] = mapDbSkillsToSkillModel(response);

        const skillsByExperience: { [key: string]: SkillModel[] } = {};
        skills.forEach((skill) => {
          if (!skillsByExperience[skill.experience]) {
            skillsByExperience[skill.experience] = [];
          }
          skillsByExperience[skill.experience].push(skill);
        });

        setSkills(skillsByExperience);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("Unknown error happened getting the portfolio projects.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getSkills();
  }, []);

  return (
    <article className={classes["skills-table"]}>
      <SkillsListRow
        header="Proficient"
        headerBgColor="#9B2C2C"
        skills={skills["Proficient"]}
        isLoading={isLoading}
      />
      <SkillsListRow
        header="Intermediate"
        headerBgColor="#D69E2E"
        skills={skills["Intermediate"]}
        isLoading={isLoading}
      />
      <SkillsListRow
        header="Beginner"
        headerBgColor="#38B2AC"
        skills={skills["Beginner"]}
        isLoading={isLoading}
      />
    </article>
  );
}
