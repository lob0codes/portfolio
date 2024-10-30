import classes from "@/app/testu2/page.module.css";

export default function ProjectDetailsPage() {
  return (
    <div className={classes.page}>
      <header>Project Title Make it BIGG</header>
      <ul className={classes.tabs}>
        <li>General</li>
        <li>Technologies</li>
        <li>Gallery</li>
      </ul>
      <section className={classes.content}>
        <div>Content of tab 1.</div>
        <div>Content of tab 2.</div>
        <div>Content of tab 3.</div>
      </section>
    </div>
  );
}
