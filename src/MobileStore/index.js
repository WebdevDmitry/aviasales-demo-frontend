import React from "react";
import {
  Section,
  Title,
  FlexWrap,
  RatingWrap,
  Img,
  Text,
  Download
} from "./styled";
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
            <RatingWrap>
              <Img src={raiting} alt="" title="" />
              <Text>Более 103 000 оценок</Text>
            </RatingWrap>
            <FlexWrap>
              <div className="col-xs-6">
                <Img
                  src={iphone}
                  alt="Мобильное приложение Aviasales"
                  title="Мобильное приложение Aviasales"
                />
              </div>

              <div className="col-xs-6">
                <Download>
                  <Img src={apple} alt="" title="" />iPhone или iPad
                </Download>
                <Download>
                  <Img src={android} alt="" title="" />Android
                </Download>
                <Download>
                  <Img src={wf} alt="" title="" />Windows Phone
                </Download>
              </div>
            </FlexWrap>
          </div>
        </div>
      </div>
    </Section>
  );
}
