import styled from "styled-components";
import calendar from "./calendar.svg";
import arrow from "./arrow.svg";
import downarrow from "./downarrow.svg";
import aero from "./aero.svg";

export const Logo = styled.img`
  margin-top: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.header`
  background: linear-gradient(
    148.48deg,
    #00b0de 0%,
    #01aedc 3.7%,
    #02abdb 7.44%,
    #02abdb 11.16%,
    #02abdb 11.38%,
    #196ebd 100%
  );
  padding-left: 8px;
  padding-right: 8px;
`;

export const Searchlabel = styled.div`
  color: #fff;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  margin-top: 47px;
`;

export const Form = styled.form`
  margin-top: 16px;
`;

export const Flexwrap = styled.div`
  position: relative;
`;

export const DepartureCity = styled.input`
  height: 56px;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  padding-left: 16px;
  border-radius: 8px 8px 0 0;
  border: 0;
  outline: none;
  display: inline-flex;
`;

export const ChangeButton = styled.button`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
  background: url(${arrow}) no-repeat 56px;
  width: 75px;
  padding: 19px 0px;
  top: 2px;
  right: 16px;
  border: none;
  text-align: left;
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

export const ArrivalCity = styled.input`
  height: 56px;
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  margin-top: 2px;
  padding-left: 16px;
  border: 0;
  outline: none;
  display: inline-flex;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const DepartureDate = styled.button`
  height: 56px;
  width: 50%;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 102px 18px 0px;
  margin-top: 2px;
  outline: none;
  border: 0;
  margin-right: 2px;
  background: #fff url(${calendar}) no-repeat 90%;
  &:hover {
    cursor: pointer;
  }
`;

export const ArrivalDate = styled.button`
  height: 56px;
  width: 50%;
  font-size: 16px;
  line-height: 20px;
  padding: 18px 102px 18px 16px;
  margin-top: 2px;
  outline: none;
  border: 0;
  background: #fff url(${calendar}) no-repeat 90%;
  &:hover {
    cursor: pointer;
  }
`;

export const Passengers = styled.button`
  width: 100%;
  height: 56px;
  padding: 18px 35px 18px 16px;
  padding-left: 16px;
  margin-top: 2px;
  font-size: 16px;
  line-height: 20px;
  border: 0;
  background: #fff;
  border-radius: 0 0 8px 8px;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: 0;
  cursor: pointer;
  background-color: #fff;
  background: url(${downarrow}) 340px no-repeat, #fff;
  display: inline-flex;
  &:hover {
    cursor: pointer;
  }
`;

export const Submit = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 16px;
  margin-bottom: 88px;
  background-color: #ff9241;
  color: #fff;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  border: 0;
  border-radius: 8px;
  padding: 14px 75px 14px 52px;
  background: #ff9241 url(${aero}) no-repeat 80%;
`;
