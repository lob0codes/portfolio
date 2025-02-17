import { motion } from "framer-motion";

import classes from "./Overlay.module.css";
import { cn } from "@/lib/utils";

interface OverlayProps {
  theme: string;
  name: string;
  description: string;
}

export default function Overlay({ theme, name, description }: OverlayProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className={cn(classes.overlay, classes[`${theme}-theme`])}
    >
      <h3 className={classes[`title-${theme}-theme`]}>{name}</h3>
      <p>{description}</p>
    </motion.article>
  );
}
