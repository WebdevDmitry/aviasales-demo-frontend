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
  Block,
  Flag,
  City,
  OfferWrap,
  OfferRight,
  Offer,
  OfferLeft,
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

          <div className="col-xs-12">
            <Block first>
              <Flag src={flag_ru} alt="КРЫМ" title="КРЫМ" />
              <City>
                Симферополь (Крым)<br />
                <Country>КРЫМ</Country>
              </City>
              <OfferWrap>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Москвы</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 4 813 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Санкт-Петербурга</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 7 857 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Новосибирска</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 15 127 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Екатеринбурга</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 9 275 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Челябинска</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 9 148 ₽</OfferPrice>
                  </OfferRight>
                </Button>
              </OfferWrap>
            </Block>
            <Line />
          </div>

          <div className="col-xs-12">
            <Block first>
              <Flag src={flag_am} alt="АРМЕНИЯ" title="АРМЕНИЯ" />
              <City>
                Ереван<br />
                <Country>АРМЕНИЯ</Country>
              </City>
              <OfferWrap>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Москвы</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 6 758 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Санкт-Петербурга</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 9 932 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Сочи</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 11 951 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Краснодара</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 11 741 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Ростова-на-Дону</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 11 956 ₽</OfferPrice>
                  </OfferRight>
                </Button>
              </OfferWrap>
            </Block>
            <Line />
          </div>

          <div className="col-xs-12">
            <Block first>
              <Flag src={flag_mo} alt="МОЛДАВИЯ" title="МОЛДАВИЯ" />
              <City>
                Кишинёв<br />
                <Country>МОЛДАВИЯ</Country>
              </City>
              <OfferWrap>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Москвы</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 8 319 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Санкт-Петербурга</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 10 800 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Краснодара</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 12 098 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Сургута</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 16 277 ₽</OfferPrice>
                  </OfferRight>
                </Button>
                <Button>
                  <OfferLeft>
                    <OfferCity>Из Нового Уренгоя</OfferCity>
                  </OfferLeft>
                  <OfferRight>
                    <OfferPrice>от 15 987 ₽</OfferPrice>
                  </OfferRight>
                </Button>
              </OfferWrap>
            </Block>
          </div>

          <div className="col-xs-12">
            <Info>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </Info>
            <Description>
              Цены, найденные пользователями<br />за последние 48 часов, не
              являются офертой.
            </Description>
          </div>
        </div>
      </div>
    </Section>
  );
}
