import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "@/components/Footer.module.css";
import {
  faLinkedin,
  faWolfPackBattalion,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Footer() {
  return (
    <article className={classes.footer}>
      <Link href={"/"}>
        <FontAwesomeIcon
          icon={faWolfPackBattalion}
          className={classes.footer__icon}
        />
      </Link>
      <ul className={classes["footer__contact-portals"]}>
        <li>
          <Link
            href={"https://www.linkedin.com/in/alejandro-alvarado-108a059b/"}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={classes.footer__icon}
            />
          </Link>
        </li>
        <li>
          <Link href={"https://github.com/lob0codes"}>
            <FontAwesomeIcon icon={faGithub} className={classes.footer__icon} />
          </Link>
        </li>
      </ul>
    </article>
  );
}
