import styled from "styled-components";
import divide_line from "./divide-line.png";

export const Section = styled.section`
  display: none;
  background: #fff;
  padding: 25px 0 61px 0;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const DivideLine = styled.hr`
  background: url(${divide_line}) repeat-x;
  padding: 3px;
  margin: 0;
  display: none;
  border: 0;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin-top: 30px;
  margin-bottom: 0px;
  flex-basis: 100%;
  @media (min-width: 992px) {
    text-align: left;
    flex-basis: 50%;
  }
`;

export const SubTitle = styled.h4`
  font-weight: normal;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
  margin-top: 4px;
  @media (min-width: 992px) {
    text-align: left;
    margin-bottom: 0px;
  }
`;

export const Subscribe = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 992px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 3px;
  margin-left: 3px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  position: relative;
  flex-basis: 30%;
`;

export const Label = styled.label`
  position: relative;
  margin-left: 13px;
`;

export const Input = styled.input`
  padding: 7px 120px 7px 13px;
  background: #fff;
  border: 1px solid #a0b0b9;
  border-radius: 2px;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  color: #a0b0b9;
`;

export const Link = styled.a``;

export const Submit = styled.button`
  background: #ff8e41;
  padding: 8px 30px;
  border: none;
  border-radius: 2px;
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  right: 0px;
  top: 0px;
  &:hover {
    cursor: pointer;
  }
`;
