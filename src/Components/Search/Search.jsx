import React from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search" className={styles.searchInput} />
      <div className={styles.searchBtn}>
        <BiSearch color="white" size={"1.3rem"} />
      </div>
      {/* <button></button> */}
    </div>
  );
};

export default Search;
