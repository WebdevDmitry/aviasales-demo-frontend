import styled from "styled-components";

export const Section = styled.section`
  padding-top: 32px;
  background: #f8fcff;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  display: flex;
`;

export const Title = styled.p`
  color: #4a4a4a;
  font-weight: 500;
  line-height: 24px;
  font-size: 18px;
  text-align: center;
  padding: 0px 50px 0 50px;
  margin: 20px 0 0 0;
`;

export const Line = styled.div`
  height: 0.5px;
  border: 0.5px dashed #afbec6;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const CheapOffer = styled.div`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Flag = styled.img`
  width: 30px;
  height: 30px;
`;

export const City = styled.p`
  color: #5b5b5c;
  font-weight: 700;
  line-height: 32px;
  font-size: 22px;
  margin: 0px 0px 0px 12px;
`;

export const Country = styled.p`
  font-weight: 400;
  line-height: 20px;
  font-size: 12px;
  color: #a0b0b9;
  margin: 0;
`;

export const Offer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const OfferCity = styled.div`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #4a4a4a;
  text-align: left;
  margin: 0;
  padding: 10px 0;
  flex-basis: 60%;
`;

export const OfferPrice = OfferCity.extend`
  color: #00bae8;
  text-align: right;
  flex-basis: 40%;
`;

export const Info = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  color: #4a4a4a;
  text-align: center;
  padding: 0 35px 0 35px;
`;

export const Description = styled.p`
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  color: #a0b0b9;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  border: none;
  background: none;
  width: 100%;
  display: flex;
  padding-right: 0px;
  padding-left: 0px;
  &:hover {
    cursor: pointer;
    background: #f1fcff;
  }
`;
