import styled from 'styled-components';

export const HomeSection = styled.div`
  height: 500px;
  background: url('../images/Home/home-bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`;

export const Information = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HomeTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #5e5e5e;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 40px;
    color: #fff;
  }
  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

export const HomeSubTitle = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 768) {
    font-size: 20px;
  }
`;
// .home .home-information .home-info {

// }

export const HomeDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #888;
  margin-bottom: 20px;
  @media (max-width: 768) {
    font-size: 15px;
  }
`;
// .home .home-information .home-desc {

// }

export const DescSpan = styled.span`
  color: #000;
`;

// .home .home-information .home-desc span {
//
// }

export const HomeButton = styled.button`
  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #fff;
    color: #eb5424;
  }
`;

// @media (max-width:768px) {
//     .home .home-information .home-title {

//     }

//     .home .home-information .home-info {

//     }

//     .home .home-information .home-desc {
//
//     }
// }
