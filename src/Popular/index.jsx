import React from "react";
import {
  Container,
  Compas,
  PopularLabel,
  PopularLabelCity,
  Pen,
  Wrapper,
  ButtonWrapper,
  Button,
  CityWrapper,
  ImgCity,
  CityCard,
  Info,
  HalfWrap,
  City,
  Description,
  Search
} from "./styledpopular";
import compas from "./compas.svg";
import pen from "./pen.svg";
import city1 from "./city1.png";
import city2 from "./city2.png";
import city3 from "./city3.png";
import city4 from "./city4.png";
import city5 from "./city5.png";
import city6 from "./city6.png";
import button1 from "./button1.svg";
import button2 from "./button2.svg";
import button3 from "./button3.svg";
import button4 from "./button4.svg";
import button5 from "./button5.svg";
import button6 from "./button6.svg";

export default () => {
  return (
    <Container>
      <Wrapper>
        <Compas src={compas} />
        <PopularLabel>
          Популярные направления перелетов из города <br />
          <PopularLabelCity href="#">
            Москва <Pen src={pen} />
          </PopularLabelCity>
        </PopularLabel>
      </Wrapper>
      <ButtonWrapper>
        <Button>
          <img src={button1} alt="" />
          КУДА<br />УГОДНО
        </Button>
        <Button>
          <img src={button2} alt="" />СОЛНЦЕ<br />И МОРЕ
        </Button>
        <Button>
          <img src={button3} alt="" />ШОПИНГ,<br />ГОРОД
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button>
          <img src={button4} alt="" />КУЛЬТУРА<br />И ИСТОРИЯ
        </Button>
        <Button>
          <img src={button5} alt="" />НОЧНАЯ<br />ЖИЗНЬ
        </Button>
        <Button>
          <img src={button6} alt="" />ОТДЫХ<br /> С ДЕТЬМИ
        </Button>
      </ButtonWrapper>
      <CityWrapper>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <CityCard>
                <ImgCity src={city1} alt="Краснодар" title="Краснодар" />
                <Info>
                  <HalfWrap>
                    <City>Краснодар</City>
                    <Description>РОССИЯ</Description>
                  </HalfWrap>
                  <HalfWrap right>
                    <Search href="#">Найти от 1 212 ₽</Search>
                    <Description right>18 марта</Description>
                  </HalfWrap>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12">
              <CityCard>
                <ImgCity src={city2} alt="Сочи (Адлер)" title="Сочи (Адлер)" />
                <Info>
                  <HalfWrap>
                    <City>Сочи (Адлер)</City>
                    <Description>РОССИЯ</Description>
                  </HalfWrap>
                  <HalfWrap right>
                    <Search href="#">Найти от 1 334 ₽</Search>
                    <Description right>27 марта</Description>
                  </HalfWrap>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12">
              <CityCard>
                <ImgCity
                  src={city3}
                  alt="Санкт-Петербург"
                  title="Санкт-Петербург"
                />
                <Info>
                  <HalfWrap>
                    Wrap
                    <City>Санкт-Петербург</City>
                    <Description>РОССИЯ</Description>
                  </HalfWrap>
                  <HalfWrap right>
                    <Search href="#">Найти от 1 508 ₽</Search>
                    <Description right>19 февраля</Description>
                  </HalfWrap>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12">
              <CityCard>
                <ImgCity
                  src={city4}
                  alt="Минеральные Воды"
                  title="Минеральные Воды"
                />
                <Info>
                  <HalfWrap>
                    <City>Минеральные Воды</City>
                    <Description>РОССИЯ</Description>
                  </HalfWrap>
                  <HalfWrap right>
                    <Search href="#">Найти от 2 074 ₽</Search>
                    <Description right>13 марта</Description>
                  </HalfWrap>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12">
              <CityCard>
                <ImgCity
                  src={city5}
                  alt="Симферополь (Крым)"
                  title="Симферополь (Крым)"
                />
                <Info>
                  <HalfWrap>
                    <City>Симферополь (Крым)</City>
                    <Description>КРЫМ</Description>
                  </HalfWrap>
                  <HalfWrap right>
                    <Search href="#">Найти от 2 407 ₽</Search>
                    <Description right>13 марта</Description>
                  </HalfWrap>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12">
              <CityCard>
                <ImgCity src={city6} alt="Барселона" title="Барселона" />
                <Info>
                  <HalfWrap>
                    <City>Барселона</City>
                    <Description>ИСПАНИЯ</Description>
                  </HalfWrap>
                  <HalfWrap right>
                    <Search href="#">Найти от 4 247 ₽</Search>
                    <Description right>24 марта</Description>
                  </HalfWrap>
                </Info>
              </CityCard>
            </div>
          </div>
        </div>
      </CityWrapper>
    </Container>
  );
};
