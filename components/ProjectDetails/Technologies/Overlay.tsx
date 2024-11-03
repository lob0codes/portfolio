import classes from "./Overlay.module.css";
import { cn } from "@/lib/utils";

interface OverlayProps {
  theme: string;
}

export default function Overlay({ theme }: OverlayProps) {
  return (
    <article className={cn(classes.overlay, classes[`${theme}-theme`])}>
      <h3 className={classes[`title-${theme}-theme`]}>Next.js</h3>
      <p>Used as development framework to test server side rendering</p>
    </article>
  );
}
