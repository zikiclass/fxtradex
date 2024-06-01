import {
  Carousel,
  CopyExperts,
  Features,
  NavBar,
  TradingViewWidget,
  WhatWeOffer,
  Cryptocurrencies,
  FinancialMarket,
  TradingPlan,
  LatestPayouts,
  Faq,
  Footer,
} from "./HomeComponents";

export default function Home() {
  return (
    <>
      <NavBar />

      <Carousel project_title={process.env.PROJECT_NAME} />
      <TradingViewWidget />
      <Features />
      <CopyExperts project_title={process.env.PROJECT_NAME} />
      <WhatWeOffer />
      <Cryptocurrencies />
      <FinancialMarket />
      <TradingPlan />
      <LatestPayouts />
      <Faq project_title={process.env.PROJECT_NAME} />

      <Footer />
    </>
  );
}
