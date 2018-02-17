import React from "react";
import {
  Popular,
  Compas,
  PopularLabel,
  PopularLabelCity,
  Pen,
  PopularTitle,
  TravelTypes,
  TypeOfTravel,
  ImgCircle,
  PopularDestinations,
  ImgCity,
  CityCard,
  Info,
  PopularDestination,
  PriceAndDate,
  City,
  TravelCountry,
  TravelDate,
  Search,
  Flag
} from "./styled";
import compas from "./compas.svg";
import krasnodar from "./krasnodar.jpg";
import adler from "./adler.jpg";
import s_p from "./s-p.jpg";
import m_v from "./m-v.jpg";
import simf from "./simf.jpg";
import barca from "./barca.jpg";
import button_1 from "./button-1.svg";
import button_2 from "./button-2.svg";
import button_3 from "./button-3.svg";
import button_4 from "./button-4.svg";
import button_5 from "./button-5.svg";
import button_6 from "./button-6.svg";
import flag_rus from "./flag-rus.png";
import flag_esp from "./flag-spain.png";

export default () => {
  return (
    <Popular>
      <PopularTitle>
        <Compas src={compas} />
        <PopularLabel>
          Популярные направления перелетов<br /> из города&nbsp;
          <PopularLabelCity href="#">
            Москва <Pen />
          </PopularLabelCity>
        </PopularLabel>
      </PopularTitle>
      <TravelTypes>
        <div className="row">
          <div className="col-xs-4 col-md-2">
            <TypeOfTravel>
              <ImgCircle>
                <img src={button_1} alt="" />
              </ImgCircle>
              КУДА<br />УГОДНО
            </TypeOfTravel>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-2">
            <TypeOfTravel>
              <ImgCircle>
                <img src={button_2} alt="" />
              </ImgCircle>
              СОЛНЦЕ<br />И МОРЕ
            </TypeOfTravel>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-2">
            <TypeOfTravel>
              <ImgCircle>
                <img src={button_3} alt="" />
              </ImgCircle>
              ШОПИНГ,<br />ГОРОД
            </TypeOfTravel>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-2">
            <TypeOfTravel>
              <ImgCircle>
                <img src={button_4} alt="" />
              </ImgCircle>
              КУЛЬТУРА<br />ИСТОРИЯ
            </TypeOfTravel>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-2">
            <TypeOfTravel>
              <ImgCircle>
                <img src={button_5} alt="" />
              </ImgCircle>
              НОЧНАЯ<br />ЖИЗНЬ
            </TypeOfTravel>
          </div>
          <div className="col-xs-4 col-md-2 col-lg-2">
            <TypeOfTravel>
              <ImgCircle>
                <img src={button_6} alt="" />
              </ImgCircle>
              ОТДЫХ<br />С ДЕТЬМИ
            </TypeOfTravel>
          </div>
        </div>
      </TravelTypes>
      <PopularDestinations>
        <div className="container">
          <div className="row center-md">
            <div className="col-xs-12 col-md-10 col-lg-5">
              <CityCard>
                <ImgCity src={krasnodar} alt="Краснодар" title="Краснодар" />
                <Info>
                  <PopularDestination>
                    <Flag src={flag_rus} alt="" title="" />
                    <City>
                      Краснодар<br />
                      <TravelCountry>РОССИЯ</TravelCountry>
                    </City>
                  </PopularDestination>
                  <PriceAndDate>
                    <Search href="#">Найти от 1 212 ₽</Search>
                    <TravelDate>18 марта</TravelDate>
                  </PriceAndDate>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12 col-md-10 col-lg-5">
              <CityCard>
                <ImgCity src={adler} alt="Сочи (Адлер)" title="Сочи (Адлер)" />
                <Info>
                  <PopularDestination>
                    <Flag src={flag_rus} alt="" title="" />
                    <City>
                      Сочи (Адлер)<br />
                      <TravelCountry>РОССИЯ</TravelCountry>
                    </City>
                  </PopularDestination>
                  <PriceAndDate>
                    <Search href="#">Найти от 1 334 ₽</Search>
                    <TravelDate>27 марта</TravelDate>
                  </PriceAndDate>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12 col-md-10 col-lg-5">
              <CityCard>
                <ImgCity
                  src={s_p}
                  alt="Санкт-Петербург"
                  title="Санкт-Петербург"
                />
                <Info>
                  <PopularDestination>
                    <Flag src={flag_rus} alt="" title="" />
                    <City>
                      Санкт-Петербург<br />
                      <TravelCountry>РОССИЯ</TravelCountry>
                    </City>
                  </PopularDestination>
                  <PriceAndDate>
                    <Search href="#">Найти от 1 508 ₽</Search>
                    <TravelDate>19 февраля</TravelDate>
                  </PriceAndDate>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12 col-md-10 col-lg-5">
              <CityCard>
                <ImgCity
                  src={m_v}
                  alt="Минеральные Воды"
                  title="Минеральные Воды"
                />
                <Info>
                  <PopularDestination>
                    <Flag src={flag_rus} alt="" title="" />
                    <City>
                      Минеральные Воды<br />
                      <TravelCountry>РОССИЯ</TravelCountry>
                    </City>
                  </PopularDestination>
                  <PriceAndDate>
                    <Search href="#">Найти от 2 074 ₽</Search>
                    <TravelDate>13 марта</TravelDate>
                  </PriceAndDate>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12 col-md-10 col-lg-5">
              <CityCard>
                <ImgCity
                  src={simf}
                  alt="Симферополь (Крым)"
                  title="Симферополь (Крым)"
                />
                <Info>
                  <PopularDestination>
                    <Flag src={flag_rus} alt="" title="" />
                    <City>
                      Симферополь (Крым)<br />
                      <TravelCountry>КРЫМ</TravelCountry>
                    </City>
                  </PopularDestination>
                  <PriceAndDate>
                    <Search href="#">Найти от 2 407 ₽</Search>
                    <TravelDate>13 марта</TravelDate>
                  </PriceAndDate>
                </Info>
              </CityCard>
            </div>
            <div className="col-xs-12 col-md-10 col-lg-5">
              <CityCard>
                <ImgCity src={barca} alt="Барселона" title="Барселона" />
                <Info>
                  <PopularDestination>
                    <Flag src={flag_esp} alt="" title="" />
                    <City>
                      Барселона<br />
                      <TravelCountry>ИСПАНИЯ</TravelCountry>
                    </City>
                  </PopularDestination>
                  <PriceAndDate>
                    <Search href="#">Найти от 4 247 ₽</Search>
                    <TravelDate>24 марта</TravelDate>
                  </PriceAndDate>
                </Info>
              </CityCard>
            </div>
          </div>
        </div>
      </PopularDestinations>
    </Popular>
  );
};
