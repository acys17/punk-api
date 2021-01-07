import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { placeholder, updateSearchText } = props;
  return (
        <input className={styles.searchbar} type="text" placeholder={placeholder} onInput={e => updateSearchText(e.target.value)} />
  );
};

export default SearchBar;
