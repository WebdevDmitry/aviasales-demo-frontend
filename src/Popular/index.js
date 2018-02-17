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
import city_1 from "./city-1.png";
import city_2 from "./city-2.png";
import city_3 from "./city-3.png";
import city_4 from "./city-4.png";
import city_5 from "./city-5.png";
import city_6 from "./city-6.png";
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
                <ImgCity src={city_1} alt="Краснодар" title="Краснодар" />
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
                <ImgCity src={city_2} alt="Сочи (Адлер)" title="Сочи (Адлер)" />
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
                  src={city_3}
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
                  src={city_4}
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
                  src={city_5}
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
                <ImgCity src={city_6} alt="Барселона" title="Барселона" />
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
