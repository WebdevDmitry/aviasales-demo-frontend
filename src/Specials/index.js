import React from "react";
import {
  Section,
  Title,
  Card,
  Name,
  Info,
  Img,
  Price,
  Span,
  Countdown,
  Parent,
  HalfWrap,
  Description,
  Button,
  Link,
  SubText
} from "./styled";
import pobeda_logo from "./pobeda.png";
import lufthansa_logo from "./lufthansa.png";

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title>Спецпредложения на авиабилеты</Title>

            <Card>
              <Name>Билеты от 499 рублей!</Name>
              <Info>
                <Parent>
                  <HalfWrap>
                    <Img src={pobeda_logo} alt="Победа" title="Победа" />
                  </HalfWrap>
                  <HalfWrap>
                    <Price>
                      от <Span>499 ₽</Span>
                    </Price>
                    <Countdown>Осталось 45 дней</Countdown>
                  </HalfWrap>
                </Parent>
                <Description>
                  Билеты от 499 рублей!<br />
                  Специальное предложение от авиакомпании<br />Победа
                </Description>
                <Button>Узнать подробности</Button>
              </Info>
            </Card>

            <Card>
              <Name>В Нью-Йорк от 20 680 ₽</Name>
              <Info>
                <Parent>
                  <HalfWrap>
                    <Img
                      src={lufthansa_logo}
                      alt="Lufthansa"
                      title="Lufthansa"
                    />
                  </HalfWrap>
                  <HalfWrap>
                    <Price>
                      от <Span>20 680 ₽</Span>
                    </Price>
                    <Countdown>Осталось 19 дней</Countdown>
                  </HalfWrap>
                </Parent>
                <Description>
                  Из Москвы в США от 20680 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Description>
                <Button>Узнать подробности</Button>
              </Info>
            </Card>

            <Card>
              <Name>В Лос-Анджелес от 22360 рублей!</Name>
              <Info>
                <Parent>
                  <HalfWrap>
                    <Img
                      src={lufthansa_logo}
                      alt="Lufthansa"
                      title="Lufthansa"
                    />
                  </HalfWrap>
                  <HalfWrap>
                    <Price>
                      от <Span>20 360 ₽</Span>
                    </Price>
                    <Countdown>Осталось 19 дней</Countdown>
                  </HalfWrap>
                </Parent>
                <Description>
                  Из Москвы в США от 22360 рублей! Специальное предложение от
                  авиакомпании Lufthansa
                </Description>
                <Button>Узнать подробности</Button>
              </Info>
            </Card>

            <Link href="#">Смотреть все спецпредложения</Link>
            <SubText>* средняя цена по направлению</SubText>
          </div>
        </div>
      </div>
    </Section>
  );
}
