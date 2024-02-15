import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          THE <br />
          MOVIE <br />
          TRACKER
        </div>
        <div className={styles.header_input}>
          <input type="text" />
        </div>
        <div style={{ color: "white" }}>1</div>
        <div className={styles.header_phone}>Phone</div>
      </div>
    </div>
  );
};

export default Header;
