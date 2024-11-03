import classes from "./TechFeature.module.css";
import NextJsImg from "@/public/images/next-js-image-2.png";
import Image from "next/image";
import { useState } from "react";
import Overlay from "./Overlay";

export default function TechFeature() {
  const [isHovered, setIsHovered] = useState(false);

  function mouseHoverHandler() {
    setIsHovered((prevState) => !prevState);
  }

  return (
    <article className={classes.feature}>
      <div
        onMouseEnter={mouseHoverHandler}
        onMouseLeave={mouseHoverHandler}
        className={classes["image-container"]}
      >
        <Image src={NextJsImg} alt="Technology image" fill />
      </div>
      {isHovered && <Overlay theme="purple" />}
    </article>
  );
}
