import React from "react";
import styles from "@/components/playerCard/PlayerCard.module.scss";

const PlayerCard = (props) => {
  const { player } = props;
  return (
    <div className={styles.card}>
      <h2 className={styles.card__name}>
        {player.first_name} {player.last_name}
      </h2>
      <div className={styles.card__team}>
        <span>Team</span>
        <span>:</span>
        <span>{player.team.name}</span>
      </div>
      <div className={styles.card__position}>
        <span>Position</span>
        <span>:</span>
        <span>{player.position}</span>
      </div>
      <div className={styles.card__height}>
        <span>Height</span>
        <span>:</span>
        <span>
          {player.height_feet
            ? `${player.height_feet} ft / ${player.height_inches} Inches`
            : "Unknown"}
        </span>
      </div>
      <div className={styles.card__weight}>
        <span>Weight</span>
        <span>:</span>
        <span>
          {player.weight_pounds ? `${player.weight_pounds} pounds` : "Unknown"}{" "}
        </span>
      </div>
    </div>
  );
};

export default PlayerCard;
