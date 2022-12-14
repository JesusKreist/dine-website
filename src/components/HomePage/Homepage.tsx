import { Fragment } from "react";
import Footer from "./Footer/Footer";
import ReservationBanner from "./Footer/ReservationBanner";
import IntroSection from "./IntroSection";
import RestaurantShowcase from "./RestaurantShowcase/RestaurantShowcase";

const HomePage = () => {
  return (
    <Fragment>
      <IntroSection />
      <RestaurantShowcase />
      <ReservationBanner />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
