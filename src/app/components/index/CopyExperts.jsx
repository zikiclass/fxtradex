"use client";
import ChartExample from "../../../../public/img/ChartExample.png";
import Image from "next/image";
import { Bounce, Fade, Slide } from "react-awesome-reveal";
import "./styles/copyexpert.css";
import { project_name } from "../../../../env";
const CopyExperts = ({ project_title }) => {
  return (
    <>
      <div className="copyexpert__container">
        <div className="container">
          <Fade>
            <h3>Copy Expert Traders</h3>
            <div className="copyexpert__rows">
              <div className="copyexpert__col__1">
                <Fade triggerOnce>
                  <p>
                    About 5 years ago I began experimenting and playing around
                    with the currency market. ‍ The reason why I chose trading
                    was because of freedom. The ability to do whatever,
                    whenever... That&apos;s the bright side to trading.
                  </p>
                  <p>
                    But, when I started no one ever told me about the dark
                    challenging side to trading. A few years back there
                    wasn&apos;t any guide or structured resource to help traders
                    turn this into a career. It was all trial and error for
                    me... I kept experimenting and learning from my mistakes
                    until I nailed this. Now I&apos;ll be the first to tell you,
                    trading requires massive amounts of discipline.
                  </p>

                  <p>
                    Realistically, you might even trade for 2+ years
                    consistently without seeing much growth, or money, in the
                    early stages. That&apos;s terrifying to think about, but
                    that&apos;s the reality many don&apos;t talk about.
                  </p>

                  <p>
                    If there was a secret to trading it would be consistency.
                    But, remaining consistent is tough when you have no
                    direction. No one you can share your challenges with. No one
                    to give you feedback. All that ends with{" "}
                    <strong>Copy Trading.</strong>
                  </p>
                  <p>
                    My goal is to bridge the gap from the dark challenging side
                    of trading to a point where you can turn this into a
                    sustainable career. So buckle up because this is going to be
                    a heck of a ride!
                  </p>
                  <p>
                    You can take a look at the live trades I&apos;ve taken on my
                    {project_name} funded account. Which I was able to grow to
                    6-figures profit in 30 days -{" "}
                    <strong>{project_title} Expert Trader</strong>
                  </p>
                </Fade>
              </div>
              <div className="copyexpert__col__2">
                <Bounce triggerOnce>
                  <Image src={ChartExample} alt="Chart" />
                </Bounce>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default CopyExperts;
