import React from "react";
import Layout from "../components/Layout";
import ContactHero from "../assets/Cascade_Spa_Images-17.jpg";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import Mapbg from "../images/Cascade Spa Map location.png";
import { Helmet } from "react-helmet";
import MailchimpSubscribe from "../components/MailChimp/MailchimpSubscribe";

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Need more information about Cascade Spa? Get in touch with us. We're here to answer any questions about our services, bookings, and more. We'd love to hear from you!"
        />
      </Helmet>

      <section className="relative">
        <img
          src={ContactHero}
          alt="home hero bg"
          className="w-full lg:max-h-[450px] object-cover "
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

      <section className="max-w-4xl mx-auto my-12 lg:my-24">
        <div className="px-4 md:px-8 lg:px-0 py-6 lg:py-12 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col w-full md:w-1/2 text-lg font-extralight gap-6 lg:px-8 pb-8 md:pb-0">
            <div>
              <h2 className="font-titleBig text-2xl text-main-gold ">
                Cascade Spa{" "}
              </h2>
              <p className="font-title text-base">3838 5TH AVE.</p>
              <p className="font-title text-base">SAN DIEGO, CA 92103 </p>
            </div>
            <div>
              <h2 className="font-titleBig text-2xl text-main-gold ">
                Reservations and Gift Cards
              </h2>
              <p className="font-title text-base">619-542-9778</p>
              <p className="font-title text-base">619-326-8029</p>
            </div>
            <div>
              <h2 className="font-titleBig text-2xl text-main-gold ">
                Questions & Concerns
              </h2>
              <p className="font-title text-base">CASCADETHESPASD@GMAIL.COM</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <img
              src={Mapbg}
              alt="Cascade Steam Sauna"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* <MailchimpSubscribe /> */}
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact | Cascade Spa</title>;
