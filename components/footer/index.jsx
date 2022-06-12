import React from "react";
import styles from "@/components/footer/Footer.module.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__avator}>@ copyright 2022</div>
      <ul className={styles.footer__nav}>
        <li>
          <Link href="/players">
            <span className={styles.footer__nav__item}>Players</span>
          </Link>
        </li>
        <li>
          <Link href="/teams">
            <span className={styles.footer__nav__item}>teams</span>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <span className={styles.footer__nav__item}>logout</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
