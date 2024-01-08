import classes from "@/components/Project/Project.module.css";
import Image, { StaticImageData } from "next/image";
import Tag from "@/components/Project/Tag";

export default function Project({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
}) {
  return (
    <>
      <article className={classes.project}>
        <Image
          className={classes.project__img}
          src={image.src}
          alt={image.alt}
        />
        <div className={classes.project__content}>
          <h3 className={classes.project__title}>{title}</h3>
          <p>{description}</p>
          <div className={classes.project__tags}>
            <Tag />
          </div>
        </div>
      </article>
    </>
  );
}
