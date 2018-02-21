import styled from "styled-components";

export const Footer = styled.footer`
  padding-top: 32px;
  padding-bottom: 24px;
  background: #fff;
`;

export const Links = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0px;
`;

export const SocialNetworks = Links.extend``;

export const CountriesCities = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0px;
`;

export const AirlinesAirports = CountriesCities.extend`
  margin-top: 31px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const RoutesServices = CountriesCities.extend`
  margin-top: 31px;
  @media (min-width: 768px) {
    margin-top: 31px;
  }
  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

export const WebStores = CountriesCities.extend`
  flex-direction: column;
  margin-top: 16px;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LinksAbout = styled.div`
  flex-basis: 50%;
`;

export const Countries = LinksAbout.extend``;

export const Cities = LinksAbout.extend``;

export const Airlines = LinksAbout.extend``;

export const Airports = LinksAbout.extend``;

export const Routes = LinksAbout.extend``;

export const Services = LinksAbout.extend``;

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
  margin-top: 12px;
  margin-bottom: 0;
  margin-right: 0;
`;
export const Copyright = Text.extend`
  text-align: center;
  margin: 24px 0 0 0;
  @media (min-width: 768px) {
    text-align: left;
  }
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
  @media (min-width: 768px) {
    text-align: left;
  }
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

export const Line = styled.hr`
  border: 1px solid #e0e6e8;
  margin: 24px 0;
`;

export const Img = styled.img`
  margin-right: ${props => (props.webstore ? "0px" : "4px")};
`;

export const AppImg = styled.a`
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 768px) {
    margin-right: 10px;
    margin-top: 17px;
  }
`;
