import React from "react";
import styles from "@/components/modal/Modal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { onChange, toggle } from "@/state/slices/teamCURDSlice";
export default function AddModal(props) {
  const { name, count, region, country, type } = useSelector(
    (state) => state.teamCURD
  );
  const dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (type === "add") {
      props.create({ name, count, region, country });
    } else if (type === "update") {
      props.update({ name, count, region, country });
    }
  };

  let onInput = (e, name) => {
    let payload = { name, value: e.target.value };
    dispatch(onChange(payload));
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.form__title}>{type} team </h1>
        <div className={styles.form__group}>
          <label className={styles.username}>name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              onInput(e, "name");
            }}
          />
        </div>
        <div className={styles.form__group}>
          <label className={styles.password}>Player Count</label>
          <input
            type="text"
            name="Count"
            required
            value={count}
            placeholder="Enter player count"
            onChange={(e) => {
              onInput(e, "count");
            }}
          />
        </div>
        <div className={styles.form__group}>
          <label className={styles.password}>Region</label>
          <input
            type="text"
            name="Region"
            required
            value={region}
            placeholder="Enter region"
            onChange={(e) => {
              onInput(e, "region");
            }}
          />
        </div>
        <div className={styles.form__group}>
          <label className={styles.password}>Country</label>
          <input
            type="text"
            name="Country"
            required
            value={country}
            placeholder="Enter country"
            onChange={(e) => {
              onInput(e, "country");
            }}
          />
        </div>
        <div className={styles.cta_group}>
          <button
            value="Submit"
            className={styles.btn}
            onClick={() => dispatch(toggle(false, "add"))}
          >
            CLOSE
          </button>
          <button type="submit" value="Submit" className={styles.btn}>
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
