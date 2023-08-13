import MainLayout from "../Layout/MainLayout";
import FeatureWrapper from "../componnts/featureWrapper/featureWrapper";
//import Footer from "../componnts/footer/Footer";
import Brands from "../componnts/showBrands/Brands";
import styles from "./index.module.css";
const DefiPeHome = () => {
  return (
    <>
      <MainLayout>
        <FeatureWrapper />

        <Brands />
        <div className={styles.feature1}>
          <div className={styles.content3}>
            <b className={styles.usabalityOfOurContainer}>
              <p className={styles.usabalityOfOur}>{`Usabality of our `}</p>
              <p className={styles.usabalityOfOur}>Trading page</p>
            </b>
            <div className={styles.list}>
              <div className={styles.div8}>
                <div className={styles.graph}>
                  <div className={styles.cardselevationflat} />
                  <div className={styles.text2}>
                    <div className={styles.trade}>Trade</div>
                    <img className={styles.dotsIcon} alt="" src="/dots.svg" />
                  </div>
                  <div className={styles.parent3}>
                    <div className={styles.div9}>2</div>
                    <div className={styles.div10}>3</div>
                    <div className={styles.div11}>4</div>
                    <div className={styles.div12}>5</div>
                    <div className={styles.div13}>1</div>
                    <div className={styles.div14}>0</div>
                    <div className={styles.cursus}>Cursus</div>
                    <div className={styles.sed}>Sed</div>
                    <div className={styles.molestie}>Molestie</div>
                    <div className={styles.elit}>Elit</div>
                    <div className={styles.lec}>Lec</div>
                    <img
                      className={styles.frameChild5}
                      alt=""
                      src="/group-47.svg"
                    />
                    <img
                      className={styles.ellipseIcon}
                      alt=""
                      src="/ellipse-17.svg"
                    />
                    <img
                      className={styles.frameChild6}
                      alt=""
                      src="/ellipse-16.svg"
                    />
                    <img
                      className={styles.frameChild7}
                      alt=""
                      src="/ellipse-20.svg"
                    />
                    <img
                      className={styles.frameChild8}
                      alt=""
                      src="/ellipse-23.svg"
                    />
                    <div className={styles.ellipseDiv} />
                    <div className={styles.frameChild9} />
                    <div className={styles.parent4}>
                      <b className={styles.b}>1599</b>
                      <div className={styles.btc1}>~0.0023BTC</div>
                      <img
                        className={styles.unionIcon}
                        alt=""
                        src="/union.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.text3}>
                  <b className={styles.platform}>Platform</b>
                  <div className={styles.tradeOver2k}>
                    Trade over 2k+ tokens on 6 EVM Chains
                  </div>
                </div>
              </div>
              <div className={styles.div15}>
                <div className={styles.card1}>
                  <div className={styles.bg} />
                  <div className={styles.frameParent}>
                    <div className={styles.parent5}>
                      <div className={styles.div16}>$165,8</div>
                      <img
                        className={styles.logoactIcon2}
                        alt=""
                        src="/logoact1.svg"
                      />
                      <div className={styles.acn2}>ACN</div>
                      <div className={styles.achain2}>Achain</div>
                    </div>
                    <div className={styles.groupParent1}>
                      <img
                        className={styles.frameChild10}
                        alt=""
                        src="/group-71.svg"
                      />
                      <div className={styles.parent6}>
                        <div className={styles.div17}>$2,236.21</div>
                        <img
                          className={styles.frameIcon4}
                          alt=""
                          src="/frame3.svg"
                        />
                      </div>
                      <div className={styles.eth2}>ETH</div>
                      <img
                        className={styles.logoethIcon2}
                        alt=""
                        src="/logoeth1.svg"
                      />
                      <div className={styles.ethereum2}>Ethereum</div>
                    </div>
                    <div className={styles.parent7}>
                      <div className={styles.div18}>$165,8</div>
                      <img
                        className={styles.frameIcon5}
                        alt=""
                        src="/frame4.svg"
                      />
                      <img
                        className={styles.logoognIcon2}
                        alt=""
                        src="/logoogn2.svg"
                      />
                      <div className={styles.originProtocol2}>
                        Origin Protocol
                      </div>
                      <div className={styles.ogn2}>OGN</div>
                    </div>
                  </div>
                  <div className={styles.cardselevationflat} />
                  <div className={styles.text4}>
                    <div className={styles.swp}>Swp</div>
                    <img className={styles.dotsIcon} alt="" src="/dots1.svg" />
                  </div>
                </div>
                <div className={styles.text5}>
                  <b className={styles.platform}>Save Money</b>
                  <div className={styles.saveYourTime}>
                    {" "}
                    Save your time and money in Every Swap.
                  </div>
                </div>
              </div>
              <div className={styles.div8}>
                <div className={styles.card1}>
                  <div className={styles.bg} />
                  <img
                    className={styles.card1Child}
                    alt=""
                    src="/group-2418.svg"
                  />
                  <div className={styles.cardselevationflat} />
                  <div className={styles.text6}>
                    <div className={styles.swp}>Swp</div>
                    <img className={styles.dotsIcon} alt="" src="/dots2.svg" />
                  </div>
                </div>
                <div className={styles.text7}>
                  <b className={styles.platform}>MEV-protection</b>
                  <div className={styles.routeAroundMev}>
                    Route around MEV to reduce slippage by up to 50%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaFooter}>

          {/* *********************************** */}
          {/* <div className={styles.cta}>
            <div className={styles.cantFindWhat}>
              Can’t find what you’re looking for?
            </div>
            <div className={styles.button2}>
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.usdt}>Contact Us</div>
            </div>
            <img className={styles.patternIcon} alt="" src="/pattern11.svg" />
          </div> */}
          {/* <div className={styles.cta1}>
            <div className={styles.joinOurMission}>Join our mission</div>
            <div className={styles.joinOurMission1}>
              Join our mission to bring greater choice, independence, and
              opportunity to individuals around the world.
            </div>
            <div className={styles.button4}>
              <div className={styles.usdt}>Visit Careers Page</div>
            </div>
            <img className={styles.patternIcon1} alt="" src="/pattern11.svg" />
          </div> */}

          {/* ****************************** */}
          <div className={styles.cta2}>
            <img className={styles.gradientIcon} alt="" src="/gradient.svg" />
            <div className={styles.right1}>
              <div className={styles.frame3}>
                <div className={styles.mask} />
                <div className={styles.statistic}>
                  <div className={styles.statisticChild} />
                  <div className={styles.monthlyParent}>
                    <div className={styles.monthly}>Monthly</div>
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/chevrondown1.svg"
                    />
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.parent8}>
                      <div className={styles.div20}>$6278.13</div>
                      <div className={styles.lastPrice}>Last price</div>
                    </div>
                    <div className={styles.btcParent}>
                      <div className={styles.div20}>38.25 BTC</div>
                      <div className={styles.lastPrice}>Volume (24h)</div>
                    </div>
                  </div>
                  <div className={styles.usdbtcParent}>
                    <div className={styles.usdbtc}>USD/BTC</div>
                    <img
                      className={styles.frameChild11}
                      alt=""
                      src="/group-963.svg"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                      <div className={styles.rectangle} />
                    </div>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.rectangle10} />
                      <div className={styles.rectangle10} />
                      <div className={styles.rectangle10} />
                      <div className={styles.rectangle10} />
                      <div className={styles.rectangle10} />
                      <div className={styles.rectangle10} />
                    </div>
                  </div>
                  <div className={styles.parent9}>
                    <div className={styles.jan}>$1600</div>
                    <div className={styles.jan}>$1500</div>
                    <div className={styles.jan}>$1450</div>
                    <div className={styles.jan}>$1400</div>
                    <div className={styles.jan}>$1350</div>
                  </div>
                  <div className={styles.janParent}>
                    <div className={styles.jan}>Jan</div>
                    <div className={styles.jan}>Feb</div>
                    <div className={styles.jan}>Mar</div>
                    <div className={styles.jan}>Apr</div>
                    <div className={styles.jan}>May</div>
                    <div className={styles.jan}>Jun</div>
                    <div className={styles.jan}>Jul</div>
                    <div className={styles.jan}>Aug</div>
                    <div className={styles.jan}>Sep</div>
                    <div className={styles.jan}>Oct</div>
                    <div className={styles.jan}>Nov</div>
                    <div className={styles.jan}>Dec</div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild12} />
                      <div className={styles.frameChild13} />
                    </div>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild14} />
                      <div className={styles.frameChild15} />
                    </div>
                    <div className={styles.rectangleParent3}>
                      <div className={styles.frameChild14} />
                      <div className={styles.frameChild15} />
                    </div>
                    <div className={styles.rectangleParent4}>
                      <div className={styles.frameChild12} />
                      <div className={styles.frameChild13} />
                    </div>
                    <div className={styles.rectangleParent5}>
                      <div className={styles.frameChild12} />
                      <div className={styles.frameChild13} />
                    </div>
                    <div className={styles.rectangleParent6}>
                      <div className={styles.frameChild14} />
                      <div className={styles.frameChild15} />
                    </div>
                    <div className={styles.rectangleParent7}>
                      <div className={styles.frameChild12} />
                      <div className={styles.frameChild13} />
                    </div>
                    <div className={styles.rectangleParent8}>
                      <div className={styles.frameChild26} />
                      <div className={styles.frameChild27} />
                    </div>
                    <div className={styles.rectangleParent9}>
                      <div className={styles.frameChild28} />
                      <div className={styles.frameChild29} />
                    </div>
                    <div className={styles.rectangleParent10}>
                      <div className={styles.frameChild12} />
                      <div className={styles.frameChild13} />
                    </div>
                    <div className={styles.rectangleParent11}>
                      <div className={styles.frameChild12} />
                      <div className={styles.frameChild33} />
                    </div>
                    <div className={styles.rectangleParent12}>
                      <div className={styles.frameChild34} />
                      <div className={styles.frameChild35} />
                    </div>
                    <div className={styles.rectangleParent13}>
                      <div className={styles.frameChild36} />
                      <div className={styles.frameChild37} />
                    </div>
                    <div className={styles.rectangleParent14}>
                      <div className={styles.frameChild38} />
                      <div className={styles.frameChild39} />
                    </div>
                    <div className={styles.rectangleParent15}>
                      <div className={styles.frameChild40} />
                      <div className={styles.frameChild41} />
                    </div>
                    <div className={styles.rectangleParent16}>
                      <div className={styles.frameChild42} />
                      <div className={styles.frameChild43} />
                    </div>
                    <div className={styles.rectangleParent17}>
                      <div className={styles.frameChild42} />
                      <div className={styles.frameChild43} />
                    </div>
                    <div className={styles.rectangleParent18}>
                      <div className={styles.frameChild42} />
                      <div className={styles.frameChild43} />
                    </div>
                    <div className={styles.rectangleParent19}>
                      <div className={styles.frameChild40} />
                      <div className={styles.frameChild49} />
                    </div>
                    <div className={styles.rectangleParent20}>
                      <div className={styles.frameChild42} />
                      <div className={styles.frameChild51} />
                    </div>
                    <div className={styles.rectangleParent21}>
                      <div className={styles.frameChild52} />
                      <div className={styles.frameChild53} />
                    </div>
                    <div className={styles.rectangleParent22}>
                      <div className={styles.frameChild52} />
                      <div className={styles.frameChild53} />
                    </div>
                    <div className={styles.rectangleParent23}>
                      <div className={styles.frameChild52} />
                      <div className={styles.frameChild53} />
                    </div>
                    <div className={styles.rectangleParent24}>
                      <div className={styles.frameChild52} />
                      <div className={styles.frameChild53} />
                    </div>
                    <div className={styles.rectangleParent25}>
                      <div className={styles.frameChild40} />
                      <div className={styles.frameChild61} />
                    </div>
                    <div className={styles.rectangleParent26}>
                      <div className={styles.frameChild40} />
                      <div className={styles.frameChild61} />
                    </div>
                    <div className={styles.rectangleParent27}>
                      <div className={styles.frameChild64} />
                      <div className={styles.frameChild65} />
                    </div>
                    <div className={styles.rectangleParent28}>
                      <div className={styles.frameChild66} />
                      <div className={styles.frameChild67} />
                    </div>
                    <div className={styles.rectangleParent29}>
                      <div className={styles.frameChild68} />
                      <div className={styles.frameChild69} />
                    </div>
                    <div className={styles.rectangleParent30}>
                      <div className={styles.frameChild70} />
                      <div className={styles.frameChild71} />
                    </div>
                    <div className={styles.rectangleParent31}>
                      <div className={styles.frameChild70} />
                      <div className={styles.frameChild71} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.coins}>
                <img
                  className={styles.quantstampQspIcon}
                  alt=""
                  src="/quantstamp-qsp1.svg"
                />
                <img
                  className={styles.logoxrpIcon}
                  alt=""
                  src="/logoxrp1.svg"
                />
                <img className={styles.cryptoIcon} alt="" src="/crypto5.svg" />
                <img
                  className={styles.cryptoIcon1}
                  alt=""
                  src="/crypto11.svg"
                />
                <img
                  className={styles.cryptoIcon2}
                  alt=""
                  src="/crypto21.svg"
                />
                <img
                  className={styles.cryptoIcon3}
                  alt=""
                  src="/crypto31.svg"
                />
                <img
                  className={styles.cryptoIcon4}
                  alt=""
                  src="/crypto41.svg"
                />
                <img
                  className={styles.swipeSxpIcon}
                  alt=""
                  src="/swipe-sxp1.svg"
                />
              </div>
            </div>
            <div className={styles.text8}>
              <b className={styles.tradeMoreThanContainer1}>
                <span>{`Trade more than  `}</span>
                <span className={styles.cryptocurrencies}>
                  50+ cryptocurrencies
                </span>
              </b>
              <div className={styles.button6}>
                <div className={styles.startTrading}>Start Trading</div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.defipeHomeChild} alt="" src="/group-39909.svg" />
        <img className={styles.defipeHomeItem} alt="" src="/group-39912.svg" />
      </MainLayout>
    </>
  );
};

export default DefiPeHome;
