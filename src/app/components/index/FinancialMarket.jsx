import "./styles/financialmarkets.css";
const FinancialMarket = () => {
  return (
    <>
      <div className="container">
        <h3>Financial Markets Explained</h3>
        <div className="row__financial">
          <div className="col_1">
            <video controls>
              <source src="/videos/financial_markets.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col_2">
            <p>
              The financial markets collectively refers to an online market in
              which firms and individuals enter into contracts to sell or buy a
              specific product from a wide range of “financial market
              instruments”.
            </p>
            <p>
              The sole purpose of investments within the financial market space
              is to trade financial securities and derivatives at low
              transaction costs whilst generating returns from calculated trade
              entries and exits.
            </p>
            <p>
              Financial market instruments and securities include stocks and
              bonds, options, cryptocurrencies, foreign currency pairs, raw
              materials and precious metals which are known in the financial
              markets as commodities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FinancialMarket;
