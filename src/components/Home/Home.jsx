import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Categories from "../Categories/Categories";
import Addresses from "../Addresses/Addresses";
import ContactUs from "../ContactUs/ContactUs";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <Categories />
        <Addresses />
        {/* <ContactUs /> */}
      </React.Fragment>
    );
  }
}

export default Home;
