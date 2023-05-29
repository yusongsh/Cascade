import React from "react";
import Layout from "../components/Layout";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import PlanDayHero from "../assets/Cascade_Spa_Images-5.jpg";

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
    </Layout>
  );
};

export default PlanYourDay;

export const Head = () => <title>Plan Your Day - Cascade Spa</title>;
