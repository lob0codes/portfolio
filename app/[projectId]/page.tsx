import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import { cn } from "@/lib/utils";
import styles from "@/app/global.module.css";

export default function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <section className={cn("custom-container", "custom-block")}>
      <ProjectDetails projectId={params.projectId} />
    </section>
  );
}
