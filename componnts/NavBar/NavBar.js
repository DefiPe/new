import styles from "../../styles/Nav.module.css";
function NavBar() {
    return(
        <div className={styles.navbarDesktop}>
        <img
          className={styles.defipelogo21}
          alt=""
          src="/defipelogo-2-1@2x.png"
        />
        <div className={styles.divider}>
          <div className={styles.divider1} />
        </div>
        <div className={styles.inputDropdownBase}>
          <div className={styles.inputWithLabel}>
            <div className={styles.input}>
              <div className={styles.content}>
                {/* <img className={styles.searchIcon} alt="" src="/search.svg" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={styles.searchIcon}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>

                <div className={styles.text}>Search</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightItemsParent}>
          <div className={styles.rightItems}>
            <div className={styles.button}>
              <b className={styles.getStarted}>About</b>
              <img
                className={styles.iconarrowRight}
                alt=""
                src="/iconarrowright1.svg"
              />
            </div>
            <div className={styles.button1}>
              <b className={styles.getStarted}>Connect Wallet</b>
            </div>
          </div>
          {/* <div className={styles.menu2Wrapper}>
            <div className={styles.menu2}>
              <img className={styles.groupIcon} alt="" src="/group1.svg" />
            </div>
          </div> */}
        </div>
      </div>
    )
}

export default NavBar;