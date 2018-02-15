import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

export const Title = styled.h3`
  font-weight: 500;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 20px;
`;

export const RatingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  margin-right: 8px;
`;

export const Text = styled.p`
  font-weight: normal;
  line-height: ${props => (props.list ? "24px" : "20px")};
  font-size: 14px;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Download = styled.button`
  font-weight: normal;
  line-height: ${props => (props.list ? "24px" : "20px")};
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
`;
