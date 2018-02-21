import styled from "styled-components";

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 24px;
  background: #fff;
`;

export const Title = styled.h5`
  font-weight: bold;
  line-height: 18px;
  font-size: 13px;
  color: #4a4a4a;
  margin: 0px;
  padding-left: 10px;
`;

export const Text = styled.p`
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #4a4a4a;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  line-height: 20px;
  font-size: 14px;
  color: #00ace2;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: #ff9d1b;
    text-decoration: underline;
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
`;

export const ArticleName = styled.div`
  display: flex;
`;
