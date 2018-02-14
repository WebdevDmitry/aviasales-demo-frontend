import styled from "styled-components";

export const Container = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  background: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

export const Compas = styled.img`
  width: 64px;
  height: 64px;
  margin-top: 40px;
`;

export const PopularLabel = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-top: 24px;
  color: #000;
  text-align: center;
`;

export const PopularLabelCity = styled.a`
  font-size: 18px;
  line-height: 24px;
  color: #00ace2;
  text-decoration: none;
`;

export const Pen = styled.img`
  width: 16px;
  height: 16px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

export const Button = styled.button`
  height: 120px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  &:hover {
    border-bottom: 1px solid #00ace2;
    color: #5c5c5c;
    cursor: pointer;
  }
`;

export const CityWrapper = styled.div`
  background: #f8fcff;
  padding: 40px 0;
`;

export const ImgCity = styled.img`
  width: 100%;
  height: 176px;
  border-radius: 8px 8px 0 0;
`;

export const CityCard = styled.div`
  min-height: 198px;
  margin-top: ${props => (props.first ? "0px" : "12px")};
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  &:hover {
    cursor: pointer;
  }
`;

export const Info = styled.div`
  background: #fff;
  height: 72px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  display: flex;
  margin-top: -3px;
`;

export const HalfWrap = styled.div`
  flex-basis: 50%;
  text-align: ${props => (props.right ? "right" : "left")};
`;

export const City = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  color: #5b5b5c;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  margin: 0;
  text-align: ${props => (props.right ? "right" : "left")};
  color: #a0b0b9;
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
