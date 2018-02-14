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
  Parent,
  Child,
  Text,
  Info,
  Description,
  Button,
  Country
} from "./styledbestprices";

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
              <Parent>
                <Button>
                  <Child left>
                    <Text first>Из Москвы</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 4 813 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Санкт-Петербурга</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 7 857 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Новосибирска</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 15 127 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Екатеринбурга</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 9 275 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Челябинска</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 9 148 ₽
                    </Text>
                  </Child>
                </Button>
              </Parent>
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
              <Parent>
                <Button>
                  <Child left>
                    <Text first>Из Москвы</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 6 758 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Санкт-Петербурга</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 9 932 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Сочи</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 11 951 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Краснодара</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 11 741 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Ростова-на-Дону</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 11 956 ₽
                    </Text>
                  </Child>
                </Button>
              </Parent>
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
              <Parent>
                <Button>
                  <Child left>
                    <Text first>Из Москвы</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 8 319 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Санкт-Петербурга</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 10 800 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Краснодара</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 12 098 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Сургута</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 16 277 ₽
                    </Text>
                  </Child>
                </Button>
                <Button>
                  <Child left>
                    <Text first>Из Нового Уренгоя</Text>
                  </Child>
                  <Child>
                    <Text price first>
                      от 15 987 ₽
                    </Text>
                  </Child>
                </Button>
              </Parent>
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
