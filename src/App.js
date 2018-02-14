import React, { Component } from "react";
import Header from "./Header/";
import Popular from "./Popular/";
import BestPrices from "./BestPrices/";
import Specials from "./Specials/";
import Faq from "./Faq/";
import MobileStore from "./MobileStore/";
import Footer from "./Footer/";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Popular />
        <BestPrices />
        <Specials />
        <Faq />
        <MobileStore />
        <Footer />
      </div>
    );
  }
}

export default App;
