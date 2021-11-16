import React from 'react';
import {
  AboutSection,
  AboutIfno,
  Title,
  TitleSpan,
  InfoDir,
  Description,
  Anchor,
} from './AboutStyle';

const About = () => {
  return (
    <AboutSection>
      <div className='container'>
        <AboutIfno>
          <Title>
            <TitleSpan>This is</TitleSpan> Me
          </Title>
          <InfoDir>Creative Director</InfoDir>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{' '}
            <Anchor>explicabo</Anchor> maxime quibusdam quaerat nihil aliquid
            aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </Description>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
            explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
            repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </Description>
        </AboutIfno>
      </div>
    </AboutSection>
  );
};

export default About;
