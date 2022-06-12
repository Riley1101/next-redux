import React from "react";
import styles from "@/components/loginForm/Login.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login } from "@/state/slices/authSlice";
export default function Login() {
  const username = React.useRef();
  let dispatch = useDispatch();
  const router = useRouter();
  let handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username.current.value));
    router.replace("/");
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <h1 className={styles.form__title}>Login </h1>

        <div className={styles.form__group}>
          <label className={styles.username}>Username</label>
          <input type="text" name="username" ref={username} required />
        </div>
        <div className={styles.form__group}>
          <label className={styles.password}>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" value="Submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
}
