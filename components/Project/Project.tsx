import classes from "@/components/Project/Project.module.css";
import Image, { StaticImageData } from "next/image";
import Tag from "@/components/Project/Tag";
import TagModel from "@/models/tag";

export default function Project({
  title,
  description,
  image,
  tags,
}: {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  tags?: TagModel[];
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
            {tags ? (
              tags.map((tag, index) => (
                <Tag key={index} name={tag.name} icon={tag.icon} />
              ))
            ) : (
              <p className={classes["project__tags__no-tags"]}>No tags</p>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
