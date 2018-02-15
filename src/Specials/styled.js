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
  margin-top: ${props => (props.first ? "24px" : "12px")};
`;

export const Name = styled.div`
  background: #cd2027;
  color: #fff;
  line-height: 20px;
  font-size: 16px;
  padding: 22px 82px 22px 16px;
`;

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
`;

export const Price = styled.p`
  font-weight: normal;
  line-height: 16px;
  font-size: 12px;
  color: #5c5c5c;
  text-align: right;
  margin: 18px 0 0 0;
`;

export const Span = styled.span`
  font-size: 16px;
`;

export const Countdown = styled.p`
  font-weight: normal;
  line-height: 15px;
  font-size: 12px;
  text-align: right;
  color: #d93633;
  margin: 10px 0 0 0;
`;

export const Parent = styled.div`
  display: flex;
  width: 100%;
`;

export const HalfWrap = styled.div`
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
  padding: 10px 92px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: #ff9d1b;
    border-color: #ff9d1b;
  }
`;

export const Link = styled.a`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-decoration-line: underline;
  color: #ffffff;
  margin-top: 32px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
`;

export const SubText = styled.p`
  font-weight: normal;
  line-height: 20px;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 0px;
`;
