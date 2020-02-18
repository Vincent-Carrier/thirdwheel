import React from "react";
import styles from "./Profile.module.scss";

export default function Profile({ user }) {
  return (
    <article className={styles.profile}>
      <h3>Age</h3>
      <p>{user.age}</p>

      <h3>City</h3>
      <p>{user.city}</p>

      <h3>Identifies as</h3>
      <p>{user.gender}</p>

      <h3>Bio</h3>
      <p>{user.bio}</p>
    </article>
  );
}
