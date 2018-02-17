import React from "react";
import sub_twitter from "./sub-twitter.svg";
import sub_facebook from "./sub-facebook.svg";
import sub_vkontakte from "./sub-vkontakte.svg";
import sub_rss from "./sub-rss.svg";
import {
  Section,
  DivideLine,
  Title,
  SubTitle,
  Subscribe,
  Img,
  Form,
  Label,
  Input,
  Link,
  Submit
} from "./styled";

export default function() {
  return (
    <div>
      <DivideLine />
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-offset-1 col-lg-10">
              <Subscribe>
                <Title>
                  Хотите знать всё о скидках на авиабилеты?<br />
                  <SubTitle>
                    Вы можете подписаться на нашу рассылку<br />через соцсети
                    или по электронной почте.
                  </SubTitle>
                </Title>

                <Form action="#" method="post">
                  <Link>
                    <Img src={sub_twitter} alt="" title="" />
                  </Link>
                  <Link>
                    <Img src={sub_facebook} alt="" title="" />
                  </Link>
                  <Link>
                    <Img src={sub_vkontakte} alt="" title="" />
                  </Link>
                  <Link>
                    <Img src={sub_rss} alt="" title="" />
                  </Link>
                  <Label>
                    <Input type="email" name="email" placeholder="Ваш email" />
                    <Submit>Подписаться</Submit>
                  </Label>
                </Form>
              </Subscribe>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
