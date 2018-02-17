import styled from "styled-components";
import pen from "./pen.svg";

export const Popular = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  margin-left: auto;
  margin-right: auto;
  background: #f8fcff;
  padding-top: 40px;
  @media (min-width: 768px) {
    padding-top: 56px;
  }
`;

export const PopularTitle = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 32px;
`;

export const Compas = styled.img`
  width: 64px;
  height: 64px;
  margin: 0 auto;
  display: flex;
`;

export const PopularLabel = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-top: 24px;
  color: #000;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin-top: 20px;
  }
`;

export const PopularLabelCity = styled.a`
  font-size: 18px;
  line-height: 24px;
  color: #00ace2;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Pen = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background: url(${pen}) no-repeat;
  &:hover {
    cursor: pointer;
  }
`;

export const TravelTypes = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
`;

export const TypeOfTravel = styled.button`
  border: none;
  margin: 0 auto;
  font-size: 12px;
  line-height: 20px;
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00ace2;
  background: none;
  cursor: pointer;
  outline: none;
  &:hover {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 22px;
  height: 22px;
`;

export const ImgCircle = styled.div`
  padding: 13px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  margin: 24px auto 0px auto;
  box-shadow: 0px 4px 16px rgba(74, 74, 74, 0.12);
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const PopularDestinations = styled.div`
  background: #f8fcff
  display: flex;
  flex-flow: row wrap;
`;

export const ImgCity = styled.img`
  width: 100%;
  max-width: 624px;
  border-radius: 8px 8px 0 0;
`;

export const CityCard = styled.div`
  min-height: 198px;
  margin-top: 12px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  &:hover {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 16px;
  display: flex;
  margin-top: -3px;
  background: #fff;
`;

export const PopularDestination = styled.div`
  flex-basis: 50%;
  text-align: left;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PriceAndDate = styled.div`
  flex-basis: 50%;
  text-align: right;
`;

export const City = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 180px;
  color: #5b5b5c;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 32px;
  }
  @media (min-width: 1200px) {
    width: 250px;
  }
`;

export const TravelCountry = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  margin: 0;
  text-align: left;
  color: #a0b0b9;
`;

export const TravelDate = TravelCountry.extend`
  text-align: right;
`;

export const Search = styled.a`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin: 0;
  text-align: right;
  text-decoration: none;
  background: none;
  color: #00bae8;
`;

export const Flag = styled.img`
  display: none;
  width: 30px;
  height: 30px;
  margin-right: 16px;
  @media (min-width: 768px) {
    display: block;
  }
`;
