"use client";

import classes from "@/app/testu2/page.module.css";
import Tabs from "@/components/ProjectDetails/Tabs";

export default function ProjectDetailsPage() {
  return (
    <div className={classes.page}>
      <h1 className={classes.header}>Awesome TO-DO List</h1>
      <Tabs />
    </div>
  );
}
