import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  PortfolioSection,
  Title,
  Span,
  UlList,
  Lilist,
  ImageWraper,
  Image,
  Overlay,
  OverlaySpan,
} from './ProtfolioStyle';
const Portfolio = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get('db.json').then(res => setImages(res.data.portfolio));
  }, []);
  const protfolio = images.map(img => {
    return (
      <ImageWraper key={img.id}>
        <Image src={img.image} alt='' />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWraper>
    );
  });
  return (
    <PortfolioSection>
      <Title>
        <Span>My</Span> Portfolio
      </Title>
      <UlList>
        <Lilist active>All</Lilist>
        <Lilist>HTML</Lilist>
        <Lilist>Photoshop</Lilist>
        <Lilist>Wordpress</Lilist>
        <Lilist>Mobile</Lilist>
      </UlList>

      <div>{protfolio}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
