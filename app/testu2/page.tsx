"use client";

import axios, { AxiosResponse } from "axios";

import { useEffect, useState } from "react";

import SkillsListRow from "@/components/Skills/SkillListRow";
import SkillModel from "@/models/skill";

import { ExperienceLevel } from "@/types/enums/ExperienceLevel";

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
        const response = await axios.get("http://127.0.0.1:8000/api/skills/");
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
    <>
      <SkillsListRow
        header="Expert"
        headerBgColor="#FF6347"
        skills={skills["Expert"]}
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
    </>
  );
}
