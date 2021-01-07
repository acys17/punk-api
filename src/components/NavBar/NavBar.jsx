import React from "react";
import styles from "./NavBar.module.scss";

import SearchBar from "../SearchBar";
import logo from "./brewdoglogo.jpg";

const NavBar = (props) => {
  const { 
    updateSearchText, 
    filterABV, 
    setfilterABV, 
    filterRange, 
    setfilterRange, 
    filterAcidity, 
    setfilterAcidity } 
    = props;

  return (
    <section className={styles.navbar}>
      <img src={logo} alt=""/>
      <div className={styles.navitems}>
        <SearchBar placeholder="SEARCH" updateSearchText={updateSearchText} />
        <div className={styles.checkbox}>
          <label>
            <input type="checkbox" onClick={() => {setfilterABV(!filterABV)}} />
            High ABV (>6.0%)
          </label>
          <label>
            <input type="checkbox" onClick={() => {setfilterRange(!filterRange)}} />
            Classic Range
          </label>
          <label>
            <input type="checkbox" onClick={() => {setfilterAcidity(!filterAcidity)}} />
            Acidic
          </label>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
