import NextJsImg from "@/public/images/next-js-image-2.png";

import TechFeature from "./TechFeature";
import { useEffect, useState } from "react";
import axios from "axios";
import TechnologyModel from "@/models/technology";

export default function Technologies({
  projectId,
}: {
  projectId: number | undefined;
}) {
  const [projectTechnologies, setProjectTechnologies] = useState<
    TechnologyModel[] | null
  >(null);

  useEffect(() => {
    const getProjectTechnologies = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const projectTechnologiesUrl = `${baseUrl}technologies/?project_id=${projectId}`;

      const response = await axios.get(projectTechnologiesUrl);
      const technologies: TechnologyModel[] = response.data.map(
        (item: any) =>
          new TechnologyModel(item.id, item.name, item.image, item.description)
      );

      setProjectTechnologies(technologies);
    };
    getProjectTechnologies();
  }, [projectId]);

  return (
    <section>
      {projectTechnologies?.map((technology) => (
        <TechFeature key={technology.id} techData={technology} />
      ))}
    </section>
  );
}
