import React from "react";
import Layout from "../components/Layout";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import PlanDayHero from "../assets/Cascade_Spa_Images-5.jpg";
import Plansection from "../assets/Cascade Spa Images-28.jpg";
import Carousel from "../components/Carousal";

const PlanYourDay = () => {
  return (
    <Layout>
      <section className="relative">
        <img
          src={PlanDayHero}
          alt="home hero bg"
          className="w-full lg:max-h-[400px] object-cover "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-auto">
          <img
            src={Tiltlebg}
            alt="section title hero bg"
            className="w-96 h-auto object-cover"
          />
          <div className="absolute z-10 inset-0 flex items-center justify-center">
            <span className="text-white text-[1.8rem] lg:text-[2rem] font-titleBig">
              PLAN YOUR DAY
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <div className="px-4 md:px-8 lg:px-0 my-6 lg:my-12">
          <p>
            Here at Cascade Spa, we invite you to indulge in the ultimate
            upscale oasis in beautiful Hillcrest. Breathe in the tranquil aromas
            the moment you walk into this luxurious spa and secret hide-away.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto my-12 lg:my-32">
        <div className="px-4 md:px-8 lg:px-0 my-6 lg:my-12 flex flex-col-reverse lg:flex-row gap-8">
          <div className="flex flex-col justify-center w-full md:w-1/3 text-lg font-extralight gap-6">
            <div>
              <h2 className="uppercase font-titleBig text-lg">
                Group, Gathering, & Parties.
              </h2>
              <span className="uppercase font-title text-sm">
                (CALL FOR MORE INFORMATION)
              </span>
            </div>
            <p className="text-sm font-title font-extralight">
              It’s party time! Whether its friends gathering, girls night out,
              bachelor or bachelorette parties, birthday parties or even a
              company event/retreat. Let us be your guide and the place to go.
              We offer the best spa parties in the area! Your party could only
              be the best experience possible. Questions? Please contact us by
              calling 619-542-9778
            </p>
          </div>
          <div className="w-full md:w-2/3 h-auto">
            <Carousel />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanYourDay;

export const Head = () => <title>Plan Your Day - Cascade Spa</title>;
