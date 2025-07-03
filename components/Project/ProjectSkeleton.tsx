import { Skeleton } from "@/components/ui/skeleton";
import classes from "./Project.module.css";

export default function ProjectSkeleton() {
  return (
    <div
      className={classes.project}
      style={{ minWidth: 320, minHeight: 400, padding: 24 }}
    >
      <Skeleton
        style={{
          width: "100%",
          height: 180,
          marginBottom: 16,
          borderRadius: 12,
        }}
      />
      <Skeleton style={{ width: "60%", height: 28, marginBottom: 12 }} />
      <Skeleton style={{ width: "80%", height: 18, marginBottom: 8 }} />
      <Skeleton style={{ width: "90%", height: 18, marginBottom: 8 }} />
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <Skeleton style={{ width: 48, height: 18, borderRadius: 8 }} />
        <Skeleton style={{ width: 48, height: 18, borderRadius: 8 }} />
        <Skeleton style={{ width: 48, height: 18, borderRadius: 8 }} />
      </div>
    </div>
  );
}
