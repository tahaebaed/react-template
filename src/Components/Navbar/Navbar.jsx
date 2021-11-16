import React from 'react';
// import { Link } from 'react-router-dom';
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  LiList,
  Anchor,
  LinkStyle,
} from './Navbar.js';

const Navbar = () => {
  return (
    <NavbarSection>
      <div className='container'>
        <Logo>
          <LogoText>ProjectT</LogoText>
        </Logo>

        <UlList>
          <LiList>
            <LinkStyle to='/'>Home</LinkStyle>
          </LiList>
          <LiList>
            <Anchor href='#'>Work</Anchor>
          </LiList>
          <LiList>
            <Anchor href='#'>Portfolio</Anchor>
          </LiList>
          <LiList>
            <Anchor href='#'>Resume</Anchor>
          </LiList>
          <LiList>
            <Anchor href='#'>About</Anchor>
          </LiList>
          <LiList>
            <LinkStyle to='/Contact'>Contact</LinkStyle>
          </LiList>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
