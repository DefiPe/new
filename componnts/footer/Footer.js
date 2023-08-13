import styles from "../../styles/Footer.module.css";
function Footer() {
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.logoCopyright}>
              <div className={styles.logo}>
                <img
                  className={styles.defipelogo211}
                  alt=""
                  src="/defipelogo-2-11@2x.png"
                />
                <div className={styles.tagtitle}>
                  <div className={styles.socials}>
                    <img
                      className={styles.akarIconsinstagramFill}
                      alt=""
                      src="/akariconsinstagramfill11.svg"
                    />
                    <img
                      className={styles.akarIconsinstagramFill}
                      alt=""
                      src="/bifacebook1.svg"
                    />
                    <img
                      className={styles.akarIconsinstagramFill}
                      alt=""
                      src="/akariconstwitterfill11.svg"
                    />
                    <img
                      className={styles.akarIconsinstagramFill}
                      alt=""
                      src="/bxbxllinkedin11.svg"
                    />
                    <img
                      className={styles.akarIconsinstagramFill}
                      alt=""
                      src="/akariconsdiscordfill11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.div17}>Copyright 2022 © DefiPe</div>
            </div>
            <div className={styles.listingMenu}>
              <div className={styles.menu}>
                <div className={styles.company}>Company</div>
                <div className={styles.listItems}>
                  <div className={styles.about}>About</div>
                  <div className={styles.about}>{`Legal & Privacy`}</div>
                </div>
              </div>
              <div className={styles.menu}>
                <div className={styles.company}>Features</div>
                <div className={styles.listItems1}>
                  <div className={styles.about}>Trading</div>
                </div>
              </div>
              <div className={styles.menu}>
                <div className={styles.company}>Developers</div>
                <div className={styles.listItems1}>
                  <div className={styles.about}>API Access</div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default Footer;