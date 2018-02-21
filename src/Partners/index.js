import React from "react";
import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import ott from "./ott.png";
import korean_air from "./korean-air.png";
import el from "./el.png";
import {
  Section,
  Title,
  Slider,
  Backwards,
  Forwards,
  Img,
  SwitchingList,
  Switch
} from "./styled";

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Title>
            <Slider>
              <Backwards />
              <Img src={aeroflot} alt="" title="" />
              <Img src={s7} alt="" title="" />
              <Img src={ott} alt="" title="" />
              <Img src={korean_air} alt="" title="" />
              <Img src={el} alt="" title="" />
              <SwitchingList>
                <Switch active />
                <Switch />
                <Switch />
              </SwitchingList>
              <Forwards />
            </Slider>
          </div>
        </div>
      </div>
    </Section>
  );
}
