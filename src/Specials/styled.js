import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(162.96deg, #00b0de 41.41%, #196ebd 141.41%);
  padding-top: 16px;
  padding-bottom: 24px;
`;

export const Title = styled.h4`
  font-weight: 500;
  line-height: normal;
  font-size: 28px;
  color: #ffffff;
  margin: 0px;
`;

export const Card = styled.div`
  min-height: 270px;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 992px) {
    max-width: auto;
  }
`;

export const MiddleCard = Card.extend`
  @media (min-width: 992px) {
    max-width: 280px;
  }
`;

export const Name = styled.section`
  background: #cd2027;
  color: #fff;
  line-height: 20px;
  font-size: 16px;
  padding: 22px 82px 22px 16px;
  @media (min-width: 768px) {
    padding-right: 55px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SpecialOfferCity = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  background: #cd2027;
`;

export const LabelImage = styled.img``;

export const Info = styled.div`
  background: #fff;
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 122px;
  margin-top: 22px;
  @media (min-width: 768px) {
    width: 100px;
  }
`;

export const Price = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5c5c5c;
  text-align: right;
  margin: 18px 0 0 0;
`;

export const Hightlight = styled.span`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Countdown = styled.p`
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
  margin: 10px 0 0 0;
`;

export const Company = styled.div`
  display: flex;
  width: 100%;
`;

export const AircompanyOffer = styled.div`
  flex-basis: 50%;
  padding-right: 8px;
`;

export const Description = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #242424;
  margin-top: 17px;
`;

export const SeeAllOffers = styled.section`
  margin-top: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.0001);
  border: 2px solid #cd1f27;
  border-radius: 3px;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #d93533;
  margin-top: 27px;
  margin-bottom: 16px;
  padding: 10px 40px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: #ff9d1b;
    border-color: #ff9d1b;
  }
  @media (min-width: 768px) {
    padding: 10px;
  }
`;

export const Link = styled.a`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-decoration-line: underline;
  color: #ffffff;
  margin-bottom: 0px;
`;

export const SubText = styled.span`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 0px;
`;
