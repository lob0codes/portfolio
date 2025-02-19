import classes from "./GeneralList.module.css";

interface GeneralListProps {
  title: string;
  items: { id: number; title: string }[];
}

export default function GeneralList({ title, items }: GeneralListProps) {
  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul className={classes["list"]}>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
