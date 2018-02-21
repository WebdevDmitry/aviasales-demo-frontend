import styled from "styled-components";
import arrow from "./arrow.svg";

export const Section = styled.section`
  display: none;
  background: #fff;
  padding: 24px 0;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  line-height: 40px;
  font-size: 32px;
  text-align: center;
  color: #5c5c5c;
  margin: 0;
`;

export const Slider = styled.div`
  display: flex;
  position: relative;
  margin-top: 24px;
  flex-wrap: wrap;
  padding: 0 50px;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.button`
  border: none;
  background: transparent url(${arrow}) no-repeat center;
  padding: 20px;
  position: absolute;
  top: 20%;
  left: 0;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Backwards = Arrow.extend``;

export const Forwards = Arrow.extend`
  transform: rotate(-180deg);
  left: unset;
  right: 0px;
`;

export const Img = styled.img`
  margin-right: 32px;
  margin-bottom: 38px;
  @media (min-width: 992px) {
    margin-right: 20px;
  }
`;

export const SwitchingList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 100%;
`;

export const Switch = styled.button`
  border-radius: 50%;
  background: ${props => (props.active ? "#818181" : "rgba(0, 0, 0, 0.0001)")};
  border: 1px solid #818181;
  padding: 4px;
  margin-right: 4px;
  margin-left: 4px;
`;
