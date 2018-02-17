import React from "react";
import calendar from "./calendar.png";
import flag_ru from "./flag-rus.png";
import flag_am from "./flag-arm.png";
import flag_mo from "./flag-mol.png";
import {
  Section,
  Img,
  Title,
  Line,
  CheapOffer,
  Flag,
  City,
  Offer,
  OfferCity,
  OfferPrice,
  Info,
  Description,
  Button,
  Country
} from "./styled";

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Img src={calendar} alt="" title="" />
            <Title>Лучшие цены на авиабилеты за последний месяц</Title>
          </div>
          <div className="col-xs-12 col-lg-offset-1 col-lg-3">
            <CheapOffer>
              <Flag src={flag_ru} alt="КРЫМ" title="КРЫМ" />
              <City>
                Симферополь (Крым)<br />
                <Country>КРЫМ</Country>
              </City>
              <Offer>
                <Button>
                  <OfferCity>Из Москвы</OfferCity>
                  <OfferPrice>от 4 813 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Санкт-Петербурга</OfferCity>
                  <OfferPrice>от 7 857 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Новосибирска</OfferCity>
                  <OfferPrice>от 15 127 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Екатеринбурга</OfferCity>
                  <OfferPrice>от 9 275 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Челябинска</OfferCity>
                  <OfferPrice>от 9 148 ₽</OfferPrice>
                </Button>
              </Offer>
            </CheapOffer>
            <Line />
          </div>
          <div className="col-xs-12 col-lg-4">
            <CheapOffer>
              <Flag src={flag_am} alt="АРМЕНИЯ" title="АРМЕНИЯ" />
              <City>
                Ереван<br />
                <Country>АРМЕНИЯ</Country>
              </City>
              <Offer>
                <Button>
                  <OfferCity>Из Москвы</OfferCity>
                  <OfferPrice>от 6 758 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Санкт-Петербурга</OfferCity>
                  <OfferPrice>от 9 932 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Сочи</OfferCity>
                  <OfferPrice>от 11 951 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Краснодара</OfferCity>
                  <OfferPrice>от 11 741 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Ростова-на-Дону</OfferCity>
                  <OfferPrice>от 11 956 ₽</OfferPrice>
                </Button>
              </Offer>
            </CheapOffer>
            <Line />
          </div>
          <div className="col-xs-12 col-lg-3">
            <CheapOffer>
              <Flag src={flag_mo} alt="МОЛДАВИЯ" title="МОЛДАВИЯ" />
              <City>
                Кишинёв<br />
                <Country>МОЛДАВИЯ</Country>
              </City>
              <Offer>
                <Button>
                  <OfferCity>Из Москвы</OfferCity>
                  <OfferPrice>от 8 319 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Санкт-Петербурга</OfferCity>
                  <OfferPrice>от 10 800 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Краснодара</OfferCity>
                  <OfferPrice>от 12 098 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Сургута</OfferCity>
                  <OfferPrice>от 16 277 ₽</OfferPrice>
                </Button>
                <Button>
                  <OfferCity>Из Нового Уренгоя</OfferCity>
                  <OfferPrice>от 15 987 ₽</OfferPrice>
                </Button>
              </Offer>
            </CheapOffer>
          </div>
          <div className="col-xs-12">
            <Info>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </Info>
            <Description>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </Description>
          </div>
        </div>
      </div>
    </Section>
  );
}
