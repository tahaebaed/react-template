import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {
  ProfileSection,
  ProfileWrapper,
  Title,
  TitleSpan,
  UlList,
  LiList,
  ProfileSpan,
  Website,
  Skills,
  Bar,
  BarTitle,
  BarPerc,
  BarParent,
  BarParentSpan,
  Anchor,
} from './ProfileStyle';

const Profile = () => {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    axios.get('js/db.json').then(res => setskills(res.data.skills));
  }, []);

  const skill = skills.map(skillItem => {
    return (
      <Bar key={skillItem.id}>
        <BarTitle>{skillItem.titel}</BarTitle>
        <BarPerc>{skillItem.prec}</BarPerc>
        <BarParent>
          <BarParentSpan pres={skillItem.prec}></BarParentSpan>
        </BarParent>
      </Bar>
    );
  });
  return (
    <ProfileSection>
      <div className='container'>
        <ProfileWrapper>
          <Title>
            <TitleSpan>My </TitleSpan>Profile
          </Title>
          <UlList>
            <LiList>
              <ProfileSpan>Name</ProfileSpan>
              Taha Shahat Ebaed
            </LiList>
            <LiList>
              <ProfileSpan>Birthday</ProfileSpan>
              27/07/1995
            </LiList>
            <LiList>
              <ProfileSpan>Address</ProfileSpan>
              25 Abd-al-Ghani Afifi st., Ahmed Helmi, shubra masr, Cairo, Egypt
            </LiList>
            <LiList>
              <ProfileSpan>Phone</ProfileSpan>
              (+20) 1007 727 196
            </LiList>
            <LiList>
              <ProfileSpan>Email</ProfileSpan>
              tahaebaed7@gmail.com
            </LiList>
            <LiList>
              <ProfileSpan>Website</ProfileSpan>
              <Website>
                <Anchor>www.google.com</Anchor>
              </Website>
            </LiList>
          </UlList>
        </ProfileWrapper>

        <Skills>
          <Title>
            Some <TitleSpan>skills</TitleSpan>
          </Title>
          {/* <SkillsDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDescription> */}
          {skill}
        </Skills>
      </div>
    </ProfileSection>
  );
};

export default Profile;
