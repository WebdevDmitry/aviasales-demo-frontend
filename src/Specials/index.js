import React from "react";
import pobeda_logo from "./pobeda.png";
import lufthansa_logo from "./lufthansa.png";
import label from "./label.png";
import {
  Section,
  Title,
  Card,
  MiddleCard,
  Name,
  LabelImage,
  SpecialOfferCity,
  Info,
  Img,
  Price,
  Hightlight,
  Countdown,
  Company,
  AircompanyOffer,
  Description,
  SeeAllOffers,
  Button,
  Link,
  SubText
} from "./styled";

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-offset-1 col-lg-10">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>

          <div className="col-xs-12 col-md-4 col-lg-offset-1 col-lg-3">
            <Card>
              <Name>Билеты от 499 рублей!</Name>
              <Info>
                <Company>
                  <AircompanyOffer>
                    <Img src={pobeda_logo} alt="Победа" title="Победа" />
                  </AircompanyOffer>
                  <AircompanyOffer>
                    <Price>
                      от <Hightlight>499 ₽</Hightlight>
                    </Price>
                    <Countdown>Осталось 45 дней</Countdown>
                  </AircompanyOffer>
                </Company>
                <Description>
                  Билеты от 499 рублей!<br />
                  Специальное предложение от авиакомпании Победа
                </Description>
                <Button>Узнать подробности</Button>
              </Info>
            </Card>
          </div>

          <div className="col-xs-12 col-md-4 col-lg-4">
            <MiddleCard>
              <SpecialOfferCity>
                <Name>В Нью-Йорк от 20 680 ₽</Name>
                <LabelImage src={label} />
              </SpecialOfferCity>

              <Info>
                <Company>
                  <AircompanyOffer>
                    <Img
                      src={lufthansa_logo}
                      alt="Lufthansa"
                      title="Lufthansa"
                    />
                  </AircompanyOffer>
                  <AircompanyOffer>
                    <Price>
                      от <Hightlight>20 680 ₽</Hightlight>
                    </Price>
                    <Countdown>Осталось 19 дней</Countdown>
                  </AircompanyOffer>
                </Company>
                <Description>
                  Из Москвы в США от 20680 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Description>
                <Button>Узнать подробности</Button>
              </Info>
            </MiddleCard>
          </div>

          <div className="col-xs-12 col-md-4 col-lg-3">
            <Card>
              <SpecialOfferCity>
                <Name>В Лос-Анджелес от 22360 рублей!</Name>
                <LabelImage src={label} />
              </SpecialOfferCity>

              <Info>
                <Company>
                  <AircompanyOffer>
                    <Img
                      src={lufthansa_logo}
                      alt="Lufthansa"
                      title="Lufthansa"
                    />
                  </AircompanyOffer>
                  <AircompanyOffer>
                    <Price>
                      от <Hightlight>20 360 ₽</Hightlight>
                    </Price>
                    <Countdown>Осталось 19 дней</Countdown>
                  </AircompanyOffer>
                </Company>
                <Description>
                  Из Москвы в США от 22360 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Description>
                <Button>Узнать подробности</Button>
              </Info>
            </Card>
          </div>

          <div className="col-xs-12 col-md-12 col-lg-offset-1 col-lg-10">
            <SeeAllOffers>
              <Link href="#">Смотреть все спецпредложения</Link>
              <SubText>* средняя цена по направлению</SubText>
            </SeeAllOffers>
          </div>
        </div>
      </div>
    </Section>
  );
}
