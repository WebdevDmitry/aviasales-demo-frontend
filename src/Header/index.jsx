import React from "react";
import logo from "./logo.svg";
import {
  Logo,
  Container,
  Searchlabel,
  Form,
  DepartureCity,
  ArrivalCity,
  DepartureDate,
  ArrivalDate,
  Passengers,
  Submit,
  DateWrapper,
  Flexwrap,
  ChangeButton
} from "./styledheader";

export default () => {
  return (
    <Container>
      <Logo src={logo} alt="" />
      <Searchlabel>Поиск дешевых авиабилетов</Searchlabel>
      <Form action="#">
        <Flexwrap>
          <DepartureCity placeholder="Москва" />
          <ChangeButton>MOW</ChangeButton>
        </Flexwrap>
        <ArrivalCity placeholder="Город прибытия" />
        <DateWrapper>
          <DepartureDate value="">Туда</DepartureDate>
          <ArrivalDate value="">Обратно</ArrivalDate>
        </DateWrapper>
        <Passengers>1 пассажир, эконом</Passengers>
        <Submit>Найти билеты</Submit>
      </Form>
    </Container>
  );
};
