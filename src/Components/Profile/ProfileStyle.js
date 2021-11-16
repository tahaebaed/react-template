import styled from 'styled-components';

export const ProfileSection = styled.div`
  padding: 50px 0;
  overflow: hidden;
`;

export const ProfileWrapper = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
`;
export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;
export const TitleSpan = styled.span`
  font-weight: normal;
`;

export const UlList = styled.ul`
  list-style: none;
`;

export const LiList = styled.li`
  margin-bottom: 8px;
`;

export const ProfileSpan = styled.span`
  display: inline-block;
  width: 100px;
  margin-bottom: 0.8rem;
  font-weight: bold;
`;

export const Website = styled.span`
  font-weight: normal;
  color: #eb5424;
`;

export const Skills = styled.div`
  width: 50%;
  float: left;
  @media (max-width: 768px) {
    width: 100%;
    float: none;
  }
`;

export const SkillsDescription = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const Bar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
`;

export const BarTitle = styled.h4`
  float: left;
`;

export const BarPerc = styled.span`
  float: right;
  margin-right: 100px;
`;

export const BarParent = styled.div`
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px;
`;

export const BarParentSpan = styled.span`
  background: #eb5424;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => (props.pres === '100%' ? '100%' : '')};
  width: ${props => (props.pres === '90%' ? '90%' : '')};
  width: ${props => (props.pres === '80%' ? '80%' : '')};
  width: ${props => (props.pres === '70%' ? '70%' : '')};
  width: ${props => (props.pres === '60%' ? '60%' : '')};
  width: ${props => (props.pres === '50%' ? '50%' : '')};
  width: ${props => (props.pres === '40%' ? '40%' : '')};
  width: ${props => (props.pres === '30%' ? '30%' : '')};
  width: ${props => (props.pres === '20%' ? '20%' : '')};
  width: ${props => (props.pres === '10%' ? '10%' : '')};
  width: ${props => (props.pres === '0%' ? '0%' : '')};
`;

export const SpanSp1 = styled.span`
  width: 100%;
`;
export const SpanSp2 = styled.span`
  width: 90%;
`;
export const SpanSp3 = styled.span`
  width: 80%;
`;

export const Anchor = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #eb5424;
`;
