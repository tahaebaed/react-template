import React from 'react';
import {
  HomeSection,
  HomeTitle,
  HomeButton,
  HomeDescription,
  HomeSubTitle,
  DescSpan,
  Information,
} from './Home.js';

const Home = () => {
  return (
    <HomeSection>
      <div className='container'>
        <Information>
          <HomeTitle>Taha Ebaed</HomeTitle>
          <HomeSubTitle>Creative Director</HomeSubTitle>
          <HomeDescription>
            Iam a professional <DescSpan>Ux Designer</DescSpan> and Front-End
            Developer creating modern and resposive designs to Web and Mobile.
            Let us work together. Thank you.
          </HomeDescription>
          <HomeButton>Let's Begin</HomeButton>
        </Information>
      </div>
    </HomeSection>
  );
};

export default Home;
