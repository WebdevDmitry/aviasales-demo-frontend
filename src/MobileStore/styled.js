import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  position: relative;
  padding: 0;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MediumLarge = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  position: relative;
  padding: 26px 0;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 40px;
    text-align: left;
  }
`;

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 0;
  }
`;

export const Stores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 40px;
  }
`;

export const MobileApp = styled.div`
  flex-basis: 50%;
`;

export const Img = styled.img`
  margin-right: 8px;
  @media (min-width: 768px) {
    position: ${props => (props.iphone ? "absolute" : "relative")};
    bottom: 0px;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  line-height: ${props => (props.list ? "24px" : "20px")};
  font-size: 14px;
  color: #ffffff;
  margin: ${props => (props.download ? "0px 0px 20px 0px" : "0")};
  display: flex;
  align-items: center;
`;

export const Store = styled.button`
  font-weight: normal;
  line-height: 20px};
  font-size: 14px;
  color: #ffffff;
  margin: 0px 0px 20px 0px;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    margin-right: 25px;
  }
`;
