import styled from "styled-components";

export const Footer = styled.footer`
  background: #fff;
  padding-top: 32px;
  padding-bottom: 24px;
`;

export const Flex = styled.div`
  display: flex;
  margin-top: ${props => (props.next ? "31px" : "0px")};
  flex-wrap: wrap;
`;

export const AppFlex = Flex.extend`
  flex-direction: column;
  margin-top: 16px;
  align-items: center;
`;

export const HalfWrap = styled.div`
  flex-basis: 50%;
`;

export const Title = styled.label`
  font-weight: 500;
  line-height: 16px;
  font-size: 12px;
  margin: 0px 0px 16px 0px;
  color: #4a4a4a;
`;

export const Text = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin-top: ${props => (props.footer ? "0px" : "12px")};
  margin-bottom: ${props => (props.footer ? "8px" : "0px")};
  margin-right: ${props => (props.footer ? "12px" : "0px")};
`;
export const Copyright = Text.extend`
  text-align: center;
  margin: 24px 0 0 0;
`;

export const Social = Text.extend`
  display: flex;
  align-items: center;
  margin-right: 18px;
  &:hover {
    cursor: pointer;
  }
`;

export const AppText = Text.extend`
  text-align: center;
  margin-top: 24px;
`;

export const Link = styled.a`
  font-weight: ${props => (props.next ? "500" : "400")};
  line-height: 16px;
  font-size: 12px;
  color: #4a4a4a;
  margin-top: 16px;
  display: block;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    color: #fd8a27;
    text-decoration: none;
  }
`;

export const Line = styled.div`
  height: 1px;
  border: 1px solid #e0e6e8;
  margin: 24px 0;
`;

export const Img = styled.img`
  margin-right: ${props => (props.footer ? "0px" : "4px")};
`;

export const AppImg = styled.a`
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`;
