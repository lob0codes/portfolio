import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

import classes from "./Gallery.module.css";

export default function Gallery({
  projectId,
}: {
  projectId: number | undefined;
}) {
  const [projectGallery, setProjectGallery] = useState<string[] | null>([]);

  useEffect(() => {
    const getProjectGallery = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const projectGalleryUrl = `${baseUrl}gallery/?project_id=${projectId}`;

      const response = await axios.get(projectGalleryUrl);
      const images = response.data?.[0]?.images || [];

      setProjectGallery(images);
    };
    getProjectGallery();
  }, [projectId]);

  return (
    <section className={classes.gallery}>
      {projectGallery?.map((image, index) => (
        <div key={index} className={classes["image-container"]}>
          <Image src={image} alt="Project Image" fill />
        </div>
      ))}
    </section>
  );
}
