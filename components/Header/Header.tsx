"use client";

import classes from "@/components/Header/Header.module.css";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@uidotdev/usehooks";

function isScreenSmall(width: number | null) {
  if (width) {
    return width <= 768;
  }
}

export default function Header() {
  const { width }: { width: number | null } = useWindowSize();
  const verticalBar = (
    <motion.div
      key={"vertical-bar"}
      animate={{ height: "2rem", width: "0.1rem" }}
      className={classes["header__name__vertical-bar"]}
    />
  );

  const horizontalBar = (
    <motion.div
      key={"horizontal-bar"}
      animate={{ height: "0.1rem", width: "100%" }}
      exit={{ width: 0 }}
      className={classes["header__name__horizontal-bar"]}
    />
  );

  return (
    <header className={classes.header}>
      <div className={classes.header__name}>
        <p>Ale Alvarado</p>
        {isScreenSmall(width) ? horizontalBar : verticalBar}
        <p>Software Developer</p>
      </div>

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
