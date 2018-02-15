import React from "react";
import logo from "./logo.svg";
import {
  Header,
  Title,
  SubTitle,
  TopBlock,
  Logo,
  LogoText,
  Form,
  ButtonsBlock,
  Input,
  Block,
  DepartureDate,
  ArrivalDate,
  Quantity,
  Span,
  Submit,
  Airport,
  AirportName,
  Change
} from "./styled";

export default () => {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-12">
            <TopBlock>
              <Logo src={logo} alt="Aviasales" title="Aviasales" />
              <LogoText>aviasales</LogoText>
            </TopBlock>
          </div>
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
            <Title>Поиск дешевых авиабилетов</Title>
            <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
            <Form action="#" method="post">
              <Airport>
                <Input
                  top
                  type="text"
                  name="from"
                  placeholder="Укажите город"
                  value="Москва"
                />
                <AirportName>MOW</AirportName>
                <Change />
              </Airport>
              <Airport>
                <Input
                  greyText
                  type="text"
                  name="to"
                  placeholder="Город прибытия"
                  value=""
                />
              </Airport>
              <ButtonsBlock>
                <DepartureDate name="date-go" value="">
                  Туда
                </DepartureDate>
                <ArrivalDate name="date-out" value="">
                  Обратно
                </ArrivalDate>
              </ButtonsBlock>
              <Quantity>
                1 пассажир,&nbsp;<Span>эконом</Span>
              </Quantity>
              <Block>
                <Submit type="submit">Найти билеты</Submit>
              </Block>
            </Form>
          </div>
        </div>
      </div>
    </Header>
  );
};
