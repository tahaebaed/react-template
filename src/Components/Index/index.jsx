import React, { Component } from 'react';
import Home from '../Home/Home.jsx';
import Work from '../Work/Work.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Profile from '../Profile/Profile.jsx';
import About from '../About/About.jsx';
import SocialMedia from '../SocialMedia/SocialMedia.jsx';
import Footer from '../Footer/Footer.jsx';

class Index extends Component {
  render() {
    return (
      <>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </>
    );
  }
}

export default Index;
