import React from "react";
import styled from "styled-components";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <Video
          src="video-and-img/header-vedio.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
        >
          your prowser dose not support the video tag
        </Video>
      </HeaderContainer>
      <HeaderTitle className="text-light row">
        <h1 className="col-12 text-capitalize bg">
          you've got no <span>limits</span>
        </h1>
        <div className="col-8 mt-3 p-fixed d-flex justify-content-start text-capitalize">
          <button className="button rounded d-flex align-items-center">
            <p className="m-0 p-0">shop now</p>
            <i className="fa fa-cart-arrow-down d-none" aria-hidden="true"></i>
          </button>
        </div>
      </HeaderTitle>
    </React.Fragment>
  );
};

export default Header;

const HeaderContainer = styled.div`
  z-index: -2;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Video = styled.video`
  position: fixed;
  width: auto;
  height: auto;
  top: -200px;
`;

const HeaderTitle = styled.div`
  position: fixed;
  top: 60%;
  left: 7%;
  z-index: -1;
  font-family: "Secular One", sans-serif;
`;
