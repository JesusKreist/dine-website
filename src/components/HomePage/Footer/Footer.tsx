import React, { Fragment } from "react";
import ContactSection from "./ContactSection";
import ReservationBanner from "./ReservationBanner";

const Footer = () => {
  return (
    <Fragment>
      <ReservationBanner />
      <ContactSection />
    </Fragment>
  );
};

export default Footer;
