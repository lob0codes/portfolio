import classes from "@/components/Project/Project.module.css";
import Image, { StaticImageData } from "next/image";
import Tag from "@/components/Project/Tag";
import TagModel from "@/models/tag";

interface ProjectProps {
  title: string;
  description: string;
  image: { src: StaticImageData; alt: string };
  tags?: TagModel[];
}

export default function Project({
  title,
  description,
  image,
  tags,
}: ProjectProps) {
  return (
    <>
      <article className={classes.project}>
        <div className={classes["image-container"]}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={classes.image}
          />
        </div>
        <div className={classes.content}>
          <h3 className={classes.itle}>{title}</h3>
          <p>{description}</p>
          <div className={classes.tags}>
            {tags ? (
              tags.map((tag, index) => (
                <Tag key={index} name={tag.name} icon={tag.icon} />
              ))
            ) : (
              <p className={classes["no-tags"]}>No tags</p>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
