import Link from "next/link";

import classes from "@/components/Project/MoreInformation.module.css";

interface MoreInformationProps {
  id: number;
  url: string | undefined;
}

export default function MoreInformation({ id, url }: MoreInformationProps) {
  return (
    <section className={classes["more-information"]}>
      {url && <Link href={url}>Visit page</Link>}
      <Link href={`/${id}`}>More details...</Link>
    </section>
  );
}
