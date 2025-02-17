import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import classes from "./TechFeature.module.css";
import Overlay from "./Overlay";
import TechnologyModel from "@/models/technology";

export default function TechFeature({
  techData,
}: {
  techData: TechnologyModel;
}) {
  const [isHovered, setIsHovered] = useState(false);
  function mouseHoverHandler() {
    setIsHovered((prevState) => !prevState);
  }

  return (
    <article className={classes.feature}>
      <div
        className={classes["image-container"]}
        onMouseEnter={mouseHoverHandler}
        onMouseLeave={mouseHoverHandler}
      >
        <Image src={techData.image} alt="Technology image" fill />
        <AnimatePresence>
          {isHovered && (
            <Overlay
              theme="purple"
              name={techData.name}
              description={techData.description}
            />
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
