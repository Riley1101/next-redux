import React from "react";
import styles from "@/components/loading/Loading.module.scss";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.lds_ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
