import React from "react";
import vkontakte from "./vkontakte.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import viber from "./viber.svg";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.svg";
import windowsphone from "./windowsphone.svg";
import {
  Footer,
  Countries,
  Cities,
  Airlines,
  Airports,
  Routes,
  Services,
  Title,
  Copyright,
  AppText,
  Link,
  Line,
  Img,
  AppImg,
  CountriesCities,
  AirlinesAirports,
  RoutesServices,
  Links,
  SocialNetworks,
  WebStores
} from "./styled";

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <CountriesCities>
              <Countries>
                <Title>СТРАНЫ</Title>
                <Link>Россия</Link>
                <Link>Таиланд</Link>
                <Link>Черногория</Link>
                <Link>Кипр</Link>
                <Link>Болгария</Link>
                <Link>Грузия</Link>
                <Link next>Все страны →</Link>
              </Countries>
              <Cities>
                <Title>ГОРОДА</Title>
                <Link>Москва</Link>
                <Link>Санкт-Петербург</Link>
                <Link>Симферополь</Link>
                <Link>Адлер</Link>
                <Link>Екатеринбург</Link>
                <Link>Лондон</Link>
                <Link next>Все города →</Link>
              </Cities>
            </CountriesCities>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <AirlinesAirports>
              <Airlines>
                <Title>АВИАКОМПАНИИ</Title>
                <Link>Air Berlin</Link>
                <Link>Air France</Link>
                <Link>Alitalia</Link>
                <Link>Air Baltic</Link>
                <Link>Emirates</Link>
                <Link>KLM</Link>
                <Link next>Все авиакомпании →</Link>
              </Airlines>
              <Airports>
                <Title>АЭРОПОРТЫ</Title>
                <Link>Шереметьево</Link>
                <Link>Курумоч</Link>
                <Link>Домодедово</Link>
                <Link>Толмачево</Link>
                <Link>Владивосток</Link>
                <Link>Гамбург</Link>
                <Link next>Все аэропорты →</Link>
              </Airports>
            </AirlinesAirports>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4">
            <RoutesServices>
              <Routes>
                <Title>НАПРАВЛЕНИЯ</Title>
                <Link>MOW – SIP</Link>
                <Link>MOW – AER</Link>
                <Link>MOW – TIV</Link>
                <Link>MOW – MRV</Link>
                <Link>LED – MOW</Link>
                <Link>MOW – BKK</Link>
              </Routes>
              <Services>
                <Title>СЕРВИСЫ</Title>
                <Link>Горящие авиабилеты</Link>
                <Link>Календарь низких цен</Link>
                <Link>Карта низких цен</Link>
                <Link>Спецпредложения</Link>
                <Link>Таблица цен</Link>
                <Link>Блог</Link>
                <Link>Помощь</Link>
              </Services>
            </RoutesServices>
          </div>
        </div>
      </div>

      <Line />

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Links>
              <Link>О компании</Link>
              <Link>Партнёрская программа</Link>
              <Link>Реклама</Link>
              <Link>Вакансии</Link>
              <Link>Помощь</Link>
              <Link>Правила</Link>
              <Link>White Label авиабилеты</Link>
            </Links>
          </div>

          <div className="col-xs-12">
            <SocialNetworks>
              <Link>
                <Img src={vkontakte} alt="" title="" /> Вконтакте
              </Link>
              <Link>
                <Img src={facebook} alt="" title="" /> Фейсбук
              </Link>
              <Link>
                <Img src={instagram} alt="" title="" /> Инстаграм
              </Link>
              <Link>
                <Img src={twitter} alt="" title="" /> Твиттер
              </Link>
              <Link>
                <Img src={viber} alt="" title="" /> Вайбер
              </Link>
            </SocialNetworks>
          </div>

          <div className="col-xs-12">
            <AppText>Поиск и бронирование отелей</AppText>
            <WebStores>
              <AppImg>
                <Img webstore src={appstore} alt="" title="" />
              </AppImg>
              <AppImg>
                <Img webstore src={googleplay} alt="" title="" />
              </AppImg>
              <AppImg>
                <Img webstore src={windowsphone} alt="" title="" />
              </AppImg>
            </WebStores>
          </div>

          <div className="col-xs-12">
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </div>
        </div>
      </div>
    </Footer>
  );
}
