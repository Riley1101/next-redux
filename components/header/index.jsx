import React from "react";
import styles from "@/components/header/Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/state/slices/authSlice";
import { reset } from "@/state/slices/playerSlice";
import Link from "next/link";
const Header = () => {
  const { username, authenticated } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <div className={styles.header__avator}>
        Hi {authenticated ? username : "Anonymous"}
      </div>
      <ul className={styles.header__nav}>
        <li>
          <Link href="/">
            <span className={styles.header__nav__item}>Players</span>
          </Link>
        </li>
        <li>
          <Link href="/teams">
            <span className={styles.header__nav__item}>teams</span>
          </Link>
        </li>
        <li>
          {authenticated ? (
            <span
              onClick={() => {
                dispatch(logout());
                dispatch(reset());
              }}
              className={styles.header__nav__item}
            >
              Logout
            </span>
          ) : (
            <Link href="/login">
              <span className={styles.header__nav__item}>login</span>
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
};
export default Header;
