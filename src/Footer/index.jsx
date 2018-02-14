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
  Flex,
  AppFlex,
  HalfWrap,
  Title,
  Text,
  Copyright,
  Social,
  AppText,
  Link,
  Line,
  Img,
  AppImg
} from "./styledfooter";

export default function() {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Flex>
              <HalfWrap>
                <Title>СТРАНЫ</Title>
                <Link>Россия</Link>
                <Link>Таиланд</Link>
                <Link>Черногория</Link>
                <Link>Кипр</Link>
                <Link>Болгария</Link>
                <Link>Грузия</Link>
                <Link next>Все страны →</Link>
              </HalfWrap>
              <HalfWrap>
                <Title>ГОРОДА</Title>
                <Link>Москва</Link>
                <Link>Санкт-Петербург</Link>
                <Link>Симферополь</Link>
                <Link>Адлер</Link>
                <Link>Екатеринбург</Link>
                <Link>Лондон</Link>
                <Link next>Все города →</Link>
              </HalfWrap>
            </Flex>
          </div>

          <div className="col-xs-12">
            <Flex next>
              <HalfWrap>
                <Title>АВИАКОМПАНИИ</Title>
                <Link>Air Berlin</Link>
                <Link>Air France</Link>
                <Link>Alitalia</Link>
                <Link>Air Baltic</Link>
                <Link>Emirates</Link>
                <Link>KLM</Link>
                <Link next>Все авиакомпании →</Link>
              </HalfWrap>
              <HalfWrap>
                <Title>АЭРОПОРТЫ</Title>
                <Link>Шереметьево</Link>
                <Link>Курумоч</Link>
                <Link>Домодедово</Link>
                <Link>Толмачево</Link>
                <Link>Владивосток</Link>
                <Link>Гамбург</Link>
                <Link next>Все аэропорты →</Link>
              </HalfWrap>
            </Flex>
          </div>

          <div className="col-xs-12">
            <Flex next>
              <HalfWrap>
                <Title>НАПРАВЛЕНИЯ</Title>
                <Link>MOW – SIP</Link>
                <Link>MOW – AER</Link>
                <Link>MOW – TIV</Link>
                <Link>MOW – MRV</Link>
                <Link>LED – MOW</Link>
                <Link>MOW – BKK</Link>
              </HalfWrap>
              <HalfWrap>
                <Title>СЕРВИСЫ</Title>
                <Link>Горящие авиабилеты</Link>
                <Link>Календарь низких цен</Link>
                <Link>Карта низких цен</Link>
                <Link>Спецпредложения</Link>
                <Link>Таблица цен</Link>
                <Link>Блог</Link>
                <Link>Помощь</Link>
              </HalfWrap>
            </Flex>
          </div>

          <div className="col-xs-12">
            <Line />
          </div>

          <div className="col-xs-12">
            <Flex>
              <Link footer>О компании</Link>
              <Link footer>Партнёрская программа</Link>
              <Link footer>Реклама</Link>
              <Link footer>Вакансии</Link>
              <Link footer>Помощь</Link>
              <Link footer>Правила</Link>
              <Link footer>White Label авиабилеты</Link>
            </Flex>
          </div>

          <div className="col-xs-12">
            <Flex>
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
            </Flex>
          </div>

          <div className="col-xs-12">
            <AppText>Поиск и бронирование отелей</AppText>
            <AppFlex>
              <AppImg>
                <Img footer src={appstore} alt="" title="" />
              </AppImg>
              <AppImg>
                <Img footer src={googleplay} alt="" title="" />
              </AppImg>
              <AppImg>
                <Img footer src={windowsphone} alt="" title="" />
              </AppImg>
            </AppFlex>
          </div>

          <div className="col-xs-12">
            <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
          </div>
        </div>
      </div>
    </Footer>
  );
}
