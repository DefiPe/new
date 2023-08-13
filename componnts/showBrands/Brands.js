import styles from "../../styles/Brands.module.css";
function Brands() {
  return (
    <>
      <div className={styles.brands}>
        <div className={styles.content2}>
          <div className={styles.manageTradeCryptosWithDeParent}>
            <b
              className={styles.manageTrade}
            >{`Manage & Trade cryptos with defipe social login`}</b>
            <div className={styles.withOver3}>
              With over +3 million tokens, you'll find even the freshest
              dropswithin minutes of hitting the chain.
            </div>
            <div className={styles.buttonsoliddefaultlargelig1}>
              <div className={styles.borderRadiuslightsolidpill}>
                <div className={styles.borderRadius} />
              </div>
              <b className={styles.getStarted3}>Start Trading</b>
            </div>
          </div>
          <img className={styles.logosIcon} alt="" src="/logos.svg" />
        </div>
      </div>
    </>
  );
}
export default Brands;
