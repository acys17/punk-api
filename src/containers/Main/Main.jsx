import React from "react";
// import styles from "./Main.module.scss";

import CardList from "../CardList"

const Main = (props) => {
  const { beerInfo } = props;

  return (
    <>
      <CardList beerInfo={beerInfo} />
    </>
  );
};

export default Main;
