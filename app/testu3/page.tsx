"use client";

import classes from "@/app/testu2/page.module.css";
import Tabs from "@/components/ProjectDetails/Tabs";
import TechFeature from "@/components/ProjectDetails/Technologies/TechFeature";

export default function TestPage() {
  return (
    <div className={classes.page}>
      <TechFeature />
    </div>
  );
}
