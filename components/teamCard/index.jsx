import React from "react";
import styles from "@/components/teamCard/TeamCard.module.scss";
import { toggle } from "@/state/slices/teamCURDSlice";
import { useDispatch } from "react-redux";

const TeamCard = (props) => {
  const { team } = props;
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <h2 className={styles.card__name}>{team.name}</h2>
      <div className={styles.card__team}>
        <span>Full Name</span>
        <span>:</span>
        <span>{team.full_name}</span>
      </div>
      <div className={styles.card__team}>
        <span>City</span>
        <span>:</span>
        <span>{team.city}</span>
      </div>
      <div className={styles.card__team}>
        <span>Division</span>
        <span>:</span>
        <span>{team.division}</span>
      </div>
      <div className={styles.card__team}>
        <span>Conference</span>
        <span>:</span>
        <span>{team.conference}</span>
      </div>
      <div className={styles.cta_group}>
        <button
          value="Submit"
          className={styles.btn}
          onClick={() => dispatch(toggle({ inProgress: true, type: "delete" }))}
        >
          DELETE
        </button>
        <button
          type="submit"
          value="Submit"
          className={styles.btn}
          onClick={() => dispatch(toggle({ inProgress: true, type: "update" }))}
        >
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
