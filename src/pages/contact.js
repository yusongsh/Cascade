import React from "react";
import Layout from "../components/Layout";
import ContactHero from "../assets/Cascade_Spa_Images-17.jpg";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";

const ContactPage = () => {
  return (
    <Layout>
      <section className="relative">
        <img
          src={ContactHero}
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
              CONTACT US
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact - Cascade Spa</title>;
