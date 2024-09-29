import Image from "next/image";

import classes from "@/components/Skills/Skill.module.css";

export default function Skill({ image }: { image: string }) {
  return (
    <article className={classes.skill}>
      <div className={classes["image-container"]}>
        <Image
          src={image}
          alt="Technology image."
          fill
          className={classes.image}
        />
      </div>
    </article>
  );
}
