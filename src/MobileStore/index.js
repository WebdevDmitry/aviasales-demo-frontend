import React from "react";
import raiting from "./raiting.png";
import iphone from "./iphone.png";
import iphone_large from "./iphone-large.png";
import apple from "./apple.svg";
import android from "./android.svg";
import wf from "./wf.svg";
import {
  Section,
  MediumLarge,
  Title,
  Rating,
  Stores,
  MobileApp,
  Img,
  Text,
  Store
} from "./styled";

export default function() {
  return (
    <div>
      <MediumLarge>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-offset-1 col-lg-3">
              <Img
                iphone
                src={iphone_large}
                alt="Мобильное приложение Aviasales"
                title="Мобильное приложение Aviasales"
              />
            </div>
            <div className="col-md-8 col-lg-7">
              <Title>
                Скачай мобильное<br />приложение Aviasales.ru
              </Title>
              <Rating>
                <Img src={raiting} alt="" title="" />
                <Text>Более 103 000 оценок</Text>
              </Rating>
              <Stores>
                <Store>
                  <Img src={apple} alt="" title="" />iPhone или iPad
                </Store>
                <Store>
                  <Img src={android} alt="" title="" />Android
                </Store>
                <Store>
                  <Img src={wf} alt="" title="" />Windows Phone
                </Store>
              </Stores>
            </div>
          </div>
        </div>
      </MediumLarge>

      <Section>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Title>Скачай мобильное приложение Aviasales.ru</Title>
              <Rating>
                <Img src={raiting} alt="" title="" />
                <Text>Более 103 000 оценок</Text>
              </Rating>
              <Rating>
                <MobileApp>
                  <Img
                    src={iphone}
                    alt="Мобильное приложение Aviasales"
                    title="Мобильное приложение Aviasales"
                  />
                </MobileApp>
                <MobileApp>
                  <Store>
                    <Img src={apple} alt="" title="" />iPhone или iPad
                  </Store>
                  <Store>
                    <Img src={android} alt="" title="" />Android
                  </Store>
                  <Store>
                    <Img src={wf} alt="" title="" />Windows Phone
                  </Store>
                </MobileApp>
              </Rating>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
