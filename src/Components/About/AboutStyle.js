import styled from 'styled-components';

export const AboutSection = styled.div`
  height: 500px;
  background: url('../images/creative/about-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (max-width: 991px) {
    height: auto;
  }
`;

export const AboutIfno = styled.div`
  padding-top: 100px;
  width: 50%;
  float: right;
  @media (max-width: 991px) {
    width: 100%;
    padding-top: 10px;
    float: none;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 50px;
`;

export const TitleSpan = styled.span`
  font-weight: normal;
`;

export const InfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin-bottom: 20px;

  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  color: #000;
  margin-bottom: 15px;
  line-height: 1.8;
`;

export const Anchor = styled.a`
  text-decoration: none;
`;
// .creative {

// }

// .creative .creative-info {

// }

// .creative .creative-info .info-title {

// }

// .creative .creative-info .info-title span {
//
// }

// .creative .creative-info .info-dir {

// }

// .creative .creative-info .info-desc {
//     color: #000;
//     margin-bottom: 15px;
//     line-height: 1.8
// }

// .creative .creative-info .info-desc a {
//
// }

// @media (max-width:991px) {
//     .creative {
//         height: auto
//     }
//     .creative .creative-info {
//         width: 100%;
//         padding-top: 10px;
//         float: none
//     }

//     .creative .creative-info .info-dir {
//         font-size: 30px
//     }
// }
