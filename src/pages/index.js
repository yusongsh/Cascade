import React from "react";
import Layout from "../components/Layout";
import homeHero from "../images/Cascade Spa Images-16.jpg";
import CascadeBird from "../assets/Cascade_birds.png";
import homesection from "../assets/Cascade Spa Images-28.jpg";
import { Link, graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHomepage {
        address {
          lat
          lon
        }
        announcement {
          announcement
        }
        businessHours {
          businessHours
        }
        facebook
        instagram
        id
        yelp
        validateParking
        twitter
        phone
        parking
      }
    }
  `);

  const homepage = data.contentfulHomepage;
  console.log(homepage);

  return (
    <Layout phone={homepage.phone}>
      <main className="pt-[-40px]">
        <section className="">
          <img
            src={homeHero}
            alt="home hero bg"
            className="w-full lg:max-h-[650px] object-cover"
          />
        </section>

        <section className="py-24 flex flex-col items-center">
          <div className="-z-10 container absolute opacity-40 lg:opacity-80 left-[10%] md:left-[15%] lg:left-[25%]">
            <img src={CascadeBird} className="w-[13rem] h-auto" />
          </div>

          <h2 className="text-lg font-title font-extralight">
            WE GLADY ACCEPT APPOINTMENTS
          </h2>
          <h1 className="py-12 text-4xl font-titleBig uppercase flex flex-col items-center gap-4">
            <span>Refresh,</span> <span>Relax, Rejuvenate</span>
          </h1>
          <div className="px-6 container flex flex-col items-center gap-4 lg:gap-6 text-center max-w-3xl font-title text-sm font-extralight lg:text-base">
            <p>
              We invite our guests to indulge in the ultimate upscale RESORT
              which is centrally located in the heart of Hillcrest. Enveloped in
              the spa's serene meditative setting, our guests will embark on a
              journey towards relaxation through the healing touch of our
              professionals.
            </p>
            <p>
              Join us even if it just for a quick Mid-Week Special or one of
              your lavish Spa Packages enjoying our steam or dry sauna, jacuzzi
              and so much more. We gladly accommodate large event including
              Bachelorette or Bachelor parties, corporate event, team building,
              birthdays parties or any other special events.
            </p>
            <p>
              Our goal at Cascade Spa has always been to bring calm where there
              is chaos, to bring peace where there is pain, to soothe where
              there is tension and to heal the world. Breathe in the tranquil
              aromas & take in the visual sights the moment you walk into this
              luxurious spa and secret hide-away.
            </p>
          </div>

          <button className="mt-12 px-5 py-2 border-main-gold border-4 text-main-gold font-titleBig font-medium hover:bg-main-gold hover:text-white">
            <Link to="/services">Learn more</Link>
          </button>
        </section>

        <section className="lg:py-24 px-6 max-w-5xl flex flex-col lg:flex-row gap-16 lg:gap-12 justify-center items-center m-auto">
          <div className="w-full lg:w-1/2">
            <img
              src={homesection}
              alt="home hero bg"
              className="w-full lg:max-h-[650px] object-cover"
            />
          </div>

          <div className="flex flex-col lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <h4 className="uppercase">Address</h4>
              <p>3838 5th Ave San Diego, 92103</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <h4 className="uppercase flex flex-col">
                Parking<span>Free</span>
              </h4>
              <p>{homepage.parking}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="uppercase flex flex-col">
                <p>validate</p>
                <p>Parking</p>
                <p>1HR</p>
              </div>
              <p>{homepage.validateParking}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <h4 className="uppercase">Hours</h4>
              <div>
                <p>Monday - Thursday 10AM-10PM</p>
                <p>Friday - Sunday 9AM-10PM</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <h4 className="uppercase">Phone</h4>
              <div>
                {homepage.phone.map((phone, idx) => {
                  return <p key={idx}>{phone}</p>;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home - Cascade Spa</title>;
