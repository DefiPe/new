import styles from "../../styles/Slider.module.css";
function Slider() {
    return (
        <div className={styles.frameSection}>
          <div className={styles.frame}>
            <div className={styles.textbutton}>
              <div className={styles.text1}>
                <b className={styles.connectThousandsOf}>
                  Smartest Decentralized Crypto Wallet
                </b>
                <div className={styles.allGoodThings}>
                  Buy, trade, and hold 2k+ cryptocurrencies on DefiPe.
                </div>
              </div>
              <div className={styles.buttonsoliddefaultlargelig}>
                <div className={styles.borderRadiuslightsolidpill}>
                  <div className={styles.borderRadius} />
                </div>
                <b className={styles.getStarted2}>Get started</b>
              </div>
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
    )
}

export default Slider;