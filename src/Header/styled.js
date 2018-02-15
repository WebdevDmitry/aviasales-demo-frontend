import styled from "styled-components";
import calendar from "./calendar.svg";
import arrow from "./arrow.svg";
import downarrow from "./downarrow.svg";
import aero from "./aero.svg";

export const Header = styled.header`
  display: flex;
  padding-bottom: 88px;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  @media (min-width: 768px) {
    padding-bottom: 122px;
  }
  @media (min-width: 992px) {
    padding-bottom: 254px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  margin-top: 47px;
  margin-bottom: 0px;
  @media (min-width: 768px) {
    line-height: 48px;
    font-size: 32px;
    margin-top: 83px;
  }
  @media (min-width: 992px) {
    line-height: 48px;
    font-size: 40px;
    margin-top: 215px;
  }
`;

export const SubTitle = styled.h2`
  display: none;
  font-weight: bold;
  line-height: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
  @media (min-width: 768px) {
    display: block;
    font-size: 24px;
    line-height: 28px;
  }
  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const TopBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const Logo = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const LogoText = styled.p`
  display: none;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;
  margin: 0 0 0 12px;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Form = styled.form`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 40px;
    flex-direction: row;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
`;

export const Input = styled.input`
  display: inline-flex;
  margin: ${props => (props.date ? "2px 2px 0px 0px" : "2px 2px 0px 0px")};
  padding: 18px 106px 18px 16px;
  background: #fff;
  border-top-right-radius: ${props => (props.top ? "4px" : "0px")};
  border-top-left-radius: ${props => (props.top ? "4px" : "0px")};
  color: ${props => (props.greyText ? "#a0b0b9" : "#4a4a4a")};
  font-size: 16px;
  line-height: 20px;
  border: none;
  flex-basis: 100%;
  @media (min-width: 768px) {
    padding: 18px 91px 18px 16px;
  }
  @media (min-width: 992px) {
    padding: 18px 0px 18px 16px;
  }
`;

export const Dates = styled.button`
  display: inline-flex;
  margin: ${props => (props.date ? "2px 2px 0px 0px" : "2px 0px 0px 0px")};
  padding: ${props =>
    props.date ? "18px 234px 18px 16px" : "18px 102px 18px 16px"};
  border-top-right-radius: ${props => (props.top ? "4px" : "0px")};
  border-top-left-radius: ${props => (props.top ? "4px" : "0px")};
  background: #fff url(${calendar}) no-repeat 90%;
  color: #a0b0b9;
  font-size: 16px;
  line-height: 20px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Block = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    flex-basis: 100%;
  }
`;

export const HalfBlock = Dates.extend`
  flex-basis: 50%;
`;

export const DepartureDate = HalfBlock.extend`
  margin-right: 2px;
`;

export const ArrivalDate = HalfBlock.extend`
  margin-left: 0px;
  padding-right: 0px;
  margin-right: 2px;
  @media (min-width: 768px) {
    padding-right: 68px;
  }
`;

export const Quantity = styled.button`
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  display: inline-flex;
  margin-top: 2px;
  padding: 18px 35px 18px 16px;
  background: #fff url(${downarrow}) no-repeat 95%;
  color: #4a4a4a;
  font-size: 16px;
  line-height: 20px;
  border: none;
  margin-right: 2px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin-left: 0px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0px;
    padding-right: 139px;
  }
  @media (min-width: 992px) {
    margin-left: 0px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0px;
    padding-right: 75px;
  }
`;

export const Span = styled.span`
  color: #a0b0b9;
`;

export const Submit = styled.button`
  background: #ff9241 url(${aero}) no-repeat 85%;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  padding: 14px 75px 14px 52px;
  border: none;
  margin-top: 16px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Airport = styled.label`
  position: relative;
  display: flex;
`;

export const AirportName = styled.span`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  position: absolute;
  top: 19px;
  right: 50px;
`;

export const Change = styled.button`
  background: url(${arrow}) no-repeat center;
  padding: 28px 16px;
  top: 2px;
  right: 16px;
  border: none;
  text-align: left;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;
