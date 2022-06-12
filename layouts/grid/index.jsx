import React from "react";
import styles from "@/layouts/grid/Grid.module.scss";

const Grid = (props) => {
  return (
    <>
      <div className={styles.title}>
        <h1>List of {props.title}</h1>
        {props.title === "Teams" && (
          <button
            className={styles.add}
            onClick={() => props.onToggle(true, "add")}
          >
            ADD
          </button>
        )}
      </div>
      <div className={styles.grid}>{props.children}</div>;
      <button className={styles.load_more} onClick={() => props.loadMore()}>
        {props.status === "loading" ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default Grid;
