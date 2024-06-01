"use client";
import CopyBanner from "../../../public/img/BgTrader.jpg";
import { useEffect, useRef } from "react";
import { Footer, NavBar } from "../HomeComponents";
import Banner from "../components/Banner";
import "../components/style1.css";

const CopyTrading = () => {
  const refHandle = useRef();

  useEffect(() => {
    if (refHandle.current) {
      refHandle.current.classList.add("fadeIn");
    }
  }, []);

  return (
    <>
      <NavBar />
      <Banner text="Copy Trading" smallText="" image={CopyBanner} />
      <div className="__section" ref={refHandle}>
        <div className="container">
          <div className="content">
            <h1>Copy Trading</h1>
            <p>
              It’s all in the name! Copy trading allows you to directly copy the
              positions taken by another trader. You decide the amount you wish
              to invest and simply copy everything they do automatically in
              real-time – when that trader makes a trade, your account will make
              that same trade as well. You do not need to have any input on the
              trades, and you get the identical returns on each trade as your
              chosen trader. But by copying another trader, you could
              potentially make money based on their skills. In fact, no advanced
              knowledge of the financial market is required to take part!
            </p>

            <p>
              Copy Trading is both a product and a service. We cater to both the
              traders and investors looking to capitalize in the cryptocurrency
              trading. Being able to copy trades from several expert traders and
              also allow investors to follow one’s trades is a great service in
              and of itself.
            </p>

            <p>
              We have been trading markets for many years and recently started
              trading crypto currencies with much success. We originally wanted
              to put together a portfolio of coins and manage everyone’s funds
              in one account but we soon realized that account segregation and
              being in control of your funds is the only way to go, especially
              if we wanted to bring in outside investors. So, after looking
              around and finding out that there was no way for anyone to copy
              someone else’s trades (unlike any other market), we decided to
              start working on this project.
            </p>

            <p>
              There have been many challenges and obstacles to overcome but when
              something is worth pursuing you do it even if it’s hard. While the
              service is still being refined and improved on the daily bases we
              are actively connecting traders and investors for the mutual
              benefit in crypto currency trading/investing
            </p>

            <p>
              The history of copy trading goes back to 2005 when traders used to
              copy specific algorithms that were developed through automated
              trading. Brokers recognised the potential of having systems where
              any linked to that trader could automatically copy their trading
              account. There was no need to constantly monitor email signals or
              trading ‘chat’ rooms. We think they were onto something. Out of
              this were born services that allowed traders to connect their
              personal trading accounts to their platform. Traders no longer had
              to submit their specific strategies. The popularity of copy
              trading has since exploded. 1 in 3 say a traditional stock market
              approach is over-complex and this can be simplified by
              automatically following traders. 1 in 4 investors said they were
              considering Copy trading last year
            </p>
            <p>
              Here is how the copier works: You, as an investor, simply select
              an expert or experts that you want to copy trades from. Once you
              are signed up, this is the only action needed on your part.
            </p>
            <p>
              Once you’ve taken care of the above, you are all set. There are no
              codes that you need to run or signals for you to manually input.
              Our software will handle the trade copying automatically on your
              behalf. We monitor your experts trading activity and as soon as
              there is a trade, we calculate all the necessary parameters and
              execute the trade. The only thing you have to make sure of is that
              you have enough funds available in your trading account. When the
              expert exits a position, you too will exit it. Automatically.
            </p>

            <p>
              <b>WHO ARE THE EXPERTS</b>
            </p>

            <p>
              We carefully select expert applicants. We get to know them as a
              trader and examine their trading performance over a period of
              time. We also tend to look for expert who already have a following
              to further confirm their competence (social proof). You can also
              read about every expert on their individual performance pages.
            </p>

            <p>
              <b>HOW DOES THIS WORK</b>
            </p>

            <p>
              Here is how the copier works: You, as an investor, simply select
              an expert or experts that you want to copy trades from. Once you
              are signed up, this is the only action needed on your part.
            </p>

            <p>
              Once you’ve taken care of the above, you are all set. There are no
              codes that you need to run or signals for you to manually input.
              Our software will handle the trade copying automatically on your
              behalf. We monitor your experts trading activity and as soon as
              there is a trade, we calculate all the necessary parameters and
              execute the trade.
            </p>

            <p>
              The copier works based on trade percent amount. So, for example,
              if your expert takes a position in XYZ coin for a total of 10% of
              his account value and you are 100% allocated to that expert, then
              the copier will also execute a trade in your account in the amount
              of 10% of your account value.
            </p>

            <p>
              The only thing you have to make sure of is that you have enough
              available base currency that your expert trades with, in your
              trading account. How much is enough? First, you must meet the
              exchanges minimum order amount (let’s say about $10 per trade to
              be safe). That means that if your expert executes a 5% order, you
              must have at least $300 in your account total value (at 100%
              expert allocation as an example). This also means that you need to
              have at least 10% or higher in available base currency to avoid
              missed trades.
            </p>

            <p>
              When the expert exits a position, you too will exit it.
              Automatically. You can also change allocation at any time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CopyTrading;
