import React from "react";
import styles from "./MatchmakerGrid.module.scss";
import InteractiveMatchmakeeCard from "./InteractiveMatchmakeeCard";
import Button from "./Button";

export default function MatchmakerGrid({
  candidates,
  select,
  selectRemove,
  shuffle,
  loading
}) {
  return (
    <div className={styles.cards_button}>
      <div className={styles.cards}>
        {candidates.map((user, index) => (
          <InteractiveMatchmakeeCard
            key={index}
            user={user}
            select={select}
            selectRemove={selectRemove}
          />
        ))}
      </div>
      <Button disabled={loading} onClick={() => shuffle()}>
        Shuffle It!
      </Button>
    </div>
  );
}
