import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {
  SocialSection,
  Social,
  SocialIcon,
  SocialInfo,
  SoicalSpan,
  SpanInfo,
} from './SocialStyles';

const SocialMedia = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    axios.get('../../db.json').then(res => setSocials(res.data.social));
  }, []);

  const social = socials.map(social => {
    return (
      <Social item={social.id} key={social.id}>
        <SocialIcon className={social.icon}></SocialIcon>
        <SocialInfo>
          <SoicalSpan>{social.title}</SoicalSpan>
          <SpanInfo>{social.body}</SpanInfo>
        </SocialInfo>
      </Social>
    );
  });

  return <SocialSection>{social}</SocialSection>;
};

export default SocialMedia;
