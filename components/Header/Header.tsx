import Link from "next/link";
import classes from "@/components/Header/Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <span> Ale Alvarado | Software Developer </span>

      <nav>
        <ul className={`${classes.list} ${classes["nav-list"]}`}>
          <li className={classes["nav-list__item"]}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes["nav-list__item"]}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
