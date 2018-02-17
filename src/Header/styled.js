import styled from "styled-components";
import calendar from "./calendar.svg";
import arrow from "./arrow.svg";
import down_arrow from "./down-arrow.svg";
import aero from "./aero.svg";

export const Header = styled.header`
  background: linear-gradient(
    126.97deg,
    #00b0de 0%,
    #01aedc 3.7%,
    #02abdb 7.44%,
    #196ebd 85.88%
  );
  padding-bottom: 88px;
  @media (min-width: 768px) {
    padding-bottom: 122px;
  }
  @media (min-width: 992px) {
    padding-bottom: 254px;
  }
`;

export const HomeLink = styled.a`
  display: inline-flex;
  margin-top: 12px;
  align-items: center;
  text-decoration: none;
`;

export const Logo = styled.img``;

export const Label = styled.span`
  display: none;
  font-weight: normal;
  line-height: 25px;
  font-size: 20px;
  color: #ffffff;

  margin-left: 12px;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const FormTitle = styled.div`
  margin-top: 47px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media (min-width: 768px) {
    margin-top: 81px;
  }
  @media (min-width: 992px) {
    margin-top: 213px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0;
  font-size: 20px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (min-width: 992px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: #fff;
  display: none;
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 23px;
    display: inline-block;
  }
  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 28px;
    display: inline-block;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const CityInputWrap = styled.div`
  position: relative;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  background-color: #fff;
  @media (min-width: 768px) {
    flex-basis: calc(50% - 1px);
  }
  @media (min-width: 1440px) {
    flex-basis: calc(22% - 2px);
  }
`;

export const DepartureCity = CityInputWrap.extend`
  @media (min-width: 320px) {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  @media (min-width: 768px) {
    margin-right: 2px;
    border-top-right-radius: 0;
  }
  @media (min-width: 1440px) {
    border-bottom-left-radius: 4px;
  }
`;

export const ArrivalCity = CityInputWrap.extend`
  @media (min-width: 768px) {
    border-top-right-radius: 4px;
  }
  @media (min-width: 1440px) {
    margin-right: 2px;
    border-radius: 0;
  }
`;

export const DatePicker = styled.div`
  display: flex;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: calc(50% - 1px);
    margin-right: 2px;
  }
  @media (min-width: 1440px) {
    flex-basis: calc(34% - 2px);
  }
`;

export const DateButton = styled.button`
  flex-basis: 50%;
  margin-top: 2px;
  padding: 16px;
  border: none;
  text-align: left;
  background-image: url(${calendar});
  background-repeat: no-repeat;
  background-position: center right 16px;
  background-color: #fff;
  @media (min-width: 768px) {
    flex-basis: calc(50% - 1px);
  }
`;

export const DepartureDate = DateButton.extend`
  margin-right: 2px;
  @media (min-width: 768px) {
    border-bottom-left-radius: 4px;
  }
  @media (min-width: 1440px) {
    border-radius: 0;
  }
`;

export const ArrivalDate = DateButton.extend``;

export const DropdownButton = styled.button`
  flex-basis: 100%;
  margin-top: 2px;
  padding: 18px 16px;
  border: none;
  text-align: left;
  background-image: url(${down_arrow});
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-color: #fff;
  @media (min-width: 320px) {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  @media (min-width: 768px) {
    flex-basis: calc(50% - 1px);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
  }
  @media (min-width: 1440px) {
    flex-basis: calc(22% - 2px);
    border-top-right-radius: 4px;
  }
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 18px 16px;
  border: none;
  font-size: 16px;
  line-height: 20px;
  outline: none;
`;

export const InputAutocompleteData = styled.span`
  position: absolute;
  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
`;

export const DepartureAutocompleteData = InputAutocompleteData.extend`
  right: 43px;
`;

export const ArrivalAutocompleteData = InputAutocompleteData.extend`
  right: 16px;
`;

export const RevertButton = styled.button`
  position: absolute;
  right: 16px;
  z-index: 1;
  padding: 9px 8px;
  border: none;
  background: none;
  background-image: url(${arrow});
  cursor: pointer;
`;

export const DateValue = styled.span`
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  color: #a0b0b9;
`;

export const DropdownValue = styled.span`
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
`;

export const DropdownValueAdditional = styled.span`
  color: #a0b0b9;
`;

export const SearchTickets = styled.button`
  flex-basis: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 308px;
  margin-top: 16px;
  padding-top: 14px;
  padding-left: 52px;
  padding-bottom: 14px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 24px;
  line-height: 28px;
  font-weight: 900;
  color: #fff;
  text-align: left;
  background-image: url(${aero});
  background-repeat: no-repeat;
  background-position: center right 52px;
  background-color: #ff9241;
  @media (min-width: 768px) {
    margin-top: 32px;
  }
  @media (min-width: 992px) {
    margin-top: 48px;
  }
`;
