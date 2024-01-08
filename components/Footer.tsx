import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "@/components/Footer.module.css";
import {
  faLinkedin,
  faWolfPackBattalion,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Footer() {
  return (
    <section className={classes.footer}>
      <Link href={"/"}>
        <FontAwesomeIcon
          icon={faWolfPackBattalion}
          className={classes.footer__icon}
        />
      </Link>

      <Link href={"https://www.linkedin.com/in/alejandro-alvarado-108a059b/"}>
        <FontAwesomeIcon icon={faLinkedin} className={classes.footer__icon} />
      </Link>
    </section>
  );
}
