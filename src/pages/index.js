import React from "react";
import Layout from "../components/Layout";
import CascadeBird from "../assets/Cascade_birds.png";
import homesection from "../assets/Cascade Spa Images-28.jpg";
import homeHero from "../assets/Cascade_Spa_Images-16.jpg";
import serviceimage from "../images/cascade-service.jpg";
import packageimage from "../images/Cascade-service-2.jpg";
import { Link, graphql, useStaticQuery } from "gatsby";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import Form from "../components/Form";
import Sectionbg from "../assets/Cascade-Spa-Images-home-bg.png";
import { Helmet } from "react-helmet";

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
  console.log(homepage.parking);

  const address = homepage.parking;
  const [street, spots] = address.split(" Spots ");

  return (
    <Layout phone={homepage.phone}>
      <Helmet>
        <meta
          name="description"
          content="Cascade Spa is a Luxurious Spa in Hillcrest, San Diego Address: 3838 5th Ave San Diego, 92103 Tel: 619-542-9778 / 619-326-8029."
        />
      </Helmet>
      <main className="pt-[-40px]">
        <section className="">
          <img
            src={homeHero}
            alt="section title hero bg"
            className="w-full h-[28rem] lg:h-[700px] object-cover"
          />
        </section>

        <section className="py-8 lg:py-24 flex flex-col items-center">
          <div className="-z-10 absolute opacity-40 lg:opacity-80 left-[10%] md:left-[15%] lg:left-[25%]">
            <img
              src={CascadeBird}
              alt="Cascade Bird"
              className="w-[13rem] h-auto"
            />
          </div>

          <h2 className="text-lg font-title font-extralight tracking-wide">
            WE GLADY ACCEPT APPOINTMENTS
          </h2>
          <h1 className="py-12 lg:py-16 text-4xl font-titleBig uppercase flex flex-col items-center gap-4">
            <span>Refresh,</span> <span>Relax, Rejuvenate</span>
          </h1>
          <div className="px-6 flex flex-col items-center gap-6 lg:gap-8 text-center max-w-4xl font-title text-sm font-light lg:text-base lg:tracking-wide">
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

          <div className="-z-10 absolute left-[10%] md:left-[40%] lg:left-[65%] top-[20%] lg:top-[28%]">
            <img
              src={Sectionbg}
              alt="Cascade Bird"
              className="lg:w-[33rem] h-auto"
            />
          </div>

          <button className="mt-12 px-5 py-2 border-main-gold border-4 text-main-gold font-titleBig font-medium hover:bg-main-gold hover:text-white">
            <Link to="/services">Learn more</Link>
          </button>
        </section>

        <section className="py-8 lg:py-24 px-6 max-w-6xl flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-center m-auto font-title">
          <div className="w-full md:w-1/2 h-auto lg:h-[36rem]">
            <img
              src={homesection}
              alt="home hero bg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 lg:text-lg font-light text-base gap-4 lg:gap-6">
            <div className="grid grid-cols-3 gap-4">
              <h4 className="uppercase flex flex-col items-center">Address</h4>
              <div className="col-span-2 ml-6 lg:ml-0">
                <p>3838 5th Ave</p>
                <p>San Diego, 92103</p>
              </div>
            </div>

            <div className="col-span-3 border-b border-main-gold w-full lg:w-10/12 lg:ml-4"></div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="uppercase text-center">Parking</div>
                <div className="text-sm text-center">Free</div>
              </div>
              <p className="col-span-2 ml-6 lg:ml-0">
                {street}
                <br />
                Spots {spots}
              </p>
            </div>

            <div className="col-span-3 border-b border-main-gold w-full lg:w-10/12 lg:ml-4"></div>

            <div className="grid grid-cols-3 gap-4">
              <div className="uppercase flex flex-col items-center">
                <p>validate</p>
                <p>Parking</p>
                <p className="text-sm">1HR</p>
              </div>
              <p className="col-span-2 ml-6 lg:ml-0">
                {homepage.validateParking}
              </p>
            </div>

            <div className="col-span-3 border-b border-main-gold w-full lg:w-10/12 lg:ml-4"></div>

            <div className="grid grid-cols-3 gap-4">
              <h4 className="uppercase flex flex-col items-center">Hours</h4>
              <div className="col-span-2 ml-6 lg:ml-0">
                <div className="pb-4">
                  <p>Monday - Thursday</p>
                  <p>10AM-10PM</p>
                </div>
                <div>
                  <p>Friday - Sunday</p>
                  <p>9AM-10PM</p>
                </div>
              </div>
            </div>

            <div className="col-span-3 border-b border-main-gold w-full lg:w-10/12 lg:ml-4"></div>

            <div className="grid grid-cols-3 gap-4">
              <h4 className="uppercase flex flex-col items-center">Phone</h4>
              <div className="col-span-2 ml-6 lg:ml-0">
                {homepage.phone.map((phone, idx) => {
                  return <p key={idx}>{phone}</p>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-6 max-w-5xl h-auto flex flex-col justify-center items-center m-auto">
          <div className="relative w-80 h-auto">
            <img
              src={Tiltlebg}
              alt="section title hero bg"
              className="w-80 h-auto object-cover"
            />
            <div className="absolute z-10 inset-0 flex items-center justify-center">
              <span className="text-white text-[1.4rem] font-titleBig">
                OUR SERVICES
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-20 pt-16">
            <div className="w-80 lg:w-96 bg-main-bg-service shadow-md">
              <div className="h-auto overflow-hidden">
                <img
                  src={serviceimage}
                  alt="service background"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <Link to="/services">
                <div className="h-auto flex flex-col items-center pt-7 p-8">
                  <h2 className="text-[1.4rem] mb-4 font-titleBig text-main-gold">
                    SERVICES
                  </h2>
                  <p className="font-title text-sm font-light lg:text-base text-center">
                    With our highly trained and certified therapists, we
                    understand your body's healing needs. We provide a wide
                    variety of exceptional services include massage,
                    reflexology, and spa treatments.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-80 lg:w-96 h-auto bg-main-bg-service shadow-md">
              <div className="h-auto overflow-hidden">
                <img
                  src={packageimage}
                  alt="package background"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <Link to="/packages">
                <div className="h-auto flex flex-col  items-center pt-7 p-8">
                  <h2 className="text-[1.4rem] mb-4 font-titleBig text-main-gold">
                    PACKAGES
                  </h2>
                  <p className="font-title text-sm font-light lg:text-base text-center">
                    Whatever your reason for visiting, there is always a package
                    fits your needs - from a Head-to-Toe, our packages include
                    multiple great valued services that will guarantee your body
                    a total relaxation or we can customize something for you.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 px-6 max-w-5xl h-auto flex flex-col justify-center items-center m-auto">
          <div className="relative w-80 h-auto">
            <img
              src={Tiltlebg}
              alt="section title hero bg"
              className="w-80 h-auto object-cover"
            />
            <div className="absolute z-10 inset-0 flex items-center justify-center">
              <span className="text-white text-[1.4rem] font-titleBig">
                STAY CONNECTED
              </span>
            </div>
          </div>
          <div className="p-4 font-light text-base text-center lg:text-left opacity-50">
            <p>Sign up to receive email promotions, spa news, and more.</p>
          </div>
          <Form />
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Cascade Spa - San Diego</title>;
