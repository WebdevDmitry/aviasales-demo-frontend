import React from "react";
import logo from "./logo.svg";
import {
  Header,
  HomeLink,
  Logo,
  Label,
  FormTitle,
  Title,
  Subtitle,
  SearchForm,
  DepartureCity,
  ArrivalCity,
  DatePicker,
  DepartureDate,
  ArrivalDate,
  DropdownButton,
  Input,
  ArrivalAutocompleteData,
  DepartureAutocompleteData,
  RevertButton,
  DateValue,
  DropdownValue,
  DropdownValueAdditional,
  SearchTickets
} from "./styled";

export default () => {
  return (
    <Header>
      <div className="container">
        <HomeLink href="#">
          <Logo src={logo} alt="Aviasales Logo" />
          <Label>&nbsp;aviasales</Label>
        </HomeLink>
        <FormTitle>
          <Title>Поиск дешевых авиабилетов</Title>
          <Subtitle>Лучший способ купить авиабилеты дешево</Subtitle>
        </FormTitle>
        <SearchForm>
          <DepartureCity>
            <Input type="text" placeholder="Город вылета" />
            <DepartureAutocompleteData>MOW</DepartureAutocompleteData>
            <RevertButton />
          </DepartureCity>
          <ArrivalCity>
            <Input type="text" placeholder="Город прибытия" />
            <ArrivalAutocompleteData />
          </ArrivalCity>
          <DatePicker>
            <DepartureDate>
              <DateValue>Туда</DateValue>
            </DepartureDate>
            <ArrivalDate>
              <DateValue>Обратно</DateValue>
            </ArrivalDate>
          </DatePicker>
          <DropdownButton>
            <DropdownValue>
              1 пассажир,{" "}
              <DropdownValueAdditional>эконом</DropdownValueAdditional>
            </DropdownValue>
          </DropdownButton>
          <SearchTickets>Найти билеты</SearchTickets>
        </SearchForm>
      </div>
    </Header>
  );
};
