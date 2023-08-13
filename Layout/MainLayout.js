import styles from "../styles/Layout.module.css";
import NavBar from "../componnts/NavBar/NavBar";
import Slider from "../componnts/slider/Slider";
import Footer from "../componnts/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className={styles.defipeHome}>
        <div className={styles.header}>
          <NavBar />
          <Slider />
        </div>
        {children}
       
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
