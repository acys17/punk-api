import React from "react";
import styles from "./NoneFound.module.scss";

const NoneFound = () => {
  return (
    <section className={styles.notfound}>
      <p>Sorry, none of our items match your search. Please try again.</p>
    </section>
  );
};

export default NoneFound;
