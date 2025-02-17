import classes from "@/components/Project/Project.module.css";
import Image from "next/image";
import Tag from "@/components/Project/Tag";
import TagModel from "@/models/tag";
import Link from "next/link";
import MoreInformation from "./MoreInformation";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  url: string | undefined;
  image: { src: string; alt: string };
  tags?: TagModel[];
}

export default function Project({
  id,
  title,
  description,
  url,
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

          <MoreInformation id={id} url={url} />
        </div>
      </article>
    </>
  );
}
