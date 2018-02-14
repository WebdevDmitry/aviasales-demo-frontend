import React from "react";
import {
  Section,
  Title,
  Flex,
  Half,
  Img,
  Text,
  Download
} from "./styledmobilestore";
import raiting from "./raiting.png";
import iphone from "./iphone.png";
import apple from "./apple.svg";
import android from "./android.svg";
import wf from "./wf.svg";

export default function() {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Flex>
              <Img src={raiting} alt="" title="" />
              <Text>Более 103 000 оценок</Text>
            </Flex>
            <Flex>
              <Half>
                <Img
                  src={iphone}
                  alt="Мобильное приложение Aviasales"
                  title="Мобильное приложение Aviasales"
                />
              </Half>
              <Half>
                <Download download>
                  <Img src={apple} alt="" title="" />iPhone или iPad
                </Download>
                <Download download>
                  <Img src={android} alt="" title="" />Android
                </Download>
                <Download download>
                  <Img src={wf} alt="" title="" />Windows Phone
                </Download>
              </Half>
            </Flex>
          </div>
        </div>
      </div>
    </Section>
  );
}
