"use client";
import Image from "next/image";
import "./styles/cryptocurrencies.css";
import { cryptos } from "./data";
import { Bounce, Fade } from "react-awesome-reveal";
const Cryptocurrencies = () => {
  return (
    <>
      <div className="crypto__container">
        <div className="container">
          <Fade direction="up" triggerOnce>
            <h3>MINE TOP CRYPTO CURRENCIES</h3>
            <p>
              Unlike paper money, Bitcoin and other cryptocurrencies are
              produced mathematically and held digitally. The people who
              voluntarily offer their computing power to secure these
              cryptocurrency networks are called miners. Cryptocurrencies don’t
              have a central government or other so-called ‘middlemen’ that
              decide about the future of the system.
            </p>
            <p>
              As miners, we are processing and verifying the transactions of the
              cryptocurrency ecosystems and keeping their public transaction
              history (blockchains) maintained and secure. For this, the mining
              community is rewarded with the networks’ transaction fees and
              newly created coins.
            </p>
          </Fade>
          <div className="crypto__miners">
            {cryptos.map((crypto) => (
              <div className="crypto__miner" key={crypto.id}>
                <Bounce triggerOnce>
                  <Image src={crypto.img} alt={crypto.name} />
                  <span>{crypto.name}</span>
                </Bounce>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cryptocurrencies;
