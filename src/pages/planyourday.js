import React from "react";
import Layout from "../components/Layout";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import PlanDayHero from "../assets/Cascade_Spa_Images-5.jpg";
import Carousel from "../components/Carousal";
import { Helmet } from "react-helmet";
import Sauna from "../assets/Cascade Sauna.webp";
import Jac from "../assets/Cascade-Jacuzzi.png";
import Scrub from "../assets/Cascade scrub.webp";
import SaltSauna from "../assets/Cascade_Himalayan salt sauna.webp";

const PlanYourDay = () => {
  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Planning your day at Cascade Spa? Here's everything you need to know for a seamless and relaxing experience. From arrival to departure, we've got you covered."
        />
      </Helmet>

      <section className="relative">
        <img
          src={PlanDayHero}
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
              PLAN YOUR DAY
            </span>
          </div>
        </div>
      </section>

      {/* <section className="max-w-4xl mx-auto text-center">
        <div className="px-4 md:px-8 lg:px-0 my-6 lg:my-12">
          <p>
            Here at Cascade Spa, we invite you to indulge in the ultimate
            upscale oasis in beautiful Hillcrest. Breathe in the tranquil aromas
            the moment you walk into this luxurious spa and secret hide-away.
          </p>
        </div>
      </section> */}

      <section className="py-12 lg:py-24 flex flex-col items-center">
        <div className="px-6 flex flex-col items-center gap-4 lg:gap-6 text-center max-w-4xl font-title text-sm font-light lg:text-base ">
          <p>
            Cascade Spa is a Luxurious Gem in Hillcrest, that defines a hideaway
            oasis. We’ve been in Hillcrest since 2013. Our goal here has always
            been to bring calm where there is chaos, to bring peace where there
            is pain, to soothe where there is tension and to heal the world.
            With over 7,000 Sq ft and variety of amenities in the spa, we are
            going to bring you endless healing for your body & soul.
          </p>
          <p>
            We invite you to indulge in the ultimate upscale oasis in beautiful
            Hillcrest. Breathe in the tranquil aromas the moment you walk into
            this luxurious spa and secret hide-away.
          </p>
          <p>
            As soon as you walk into our resort, you'll be swept away by our
            serene meditative settings. Your journey toward total relaxation
            will not only be visual, but a journey towards relaxation through
            the healing touch of our professionals.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center mb-24">
        <div className="px-4 md:px-8 lg:px-0 py-6 lg:py-12 flex flex-col-reverse md:flex-row gap-8">
          <div className="flex flex-col justify-center w-full md:w-1/2 text-lg font-extralight gap-6 px-8">
            <div>
              <h2 className="uppercase font-titleBig text-xl">
                Eucalyptus + Jasmine/ Lavender + Eucalyptus Steam Sauna
              </h2>
            </div>
            <p className="text-sm lg:text-base font-title font-extralight">
              With the purest and the consistent oil spray. Our sauna is going
              to offer consistent aroma profiles which guarantees a consistent
              experience every time you enjoy it as a part of your stay!
            </p>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <img
              src={Sauna}
              alt="Cascade Steam Sauna"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 py-6 lg:py-12 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-auto">
            <img
              src={SaltSauna}
              alt="Cascade Salt Sauna"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2 text-lg font-extralight gap-6 px-8">
            <div>
              <h2 className="uppercase font-titleBig text-xl">
                Himalayan salt sauna
              </h2>
            </div>
            <p className="text-sm lg:text-base font-title font-extralight">
              Himalayan salt sauna can help stimulate the respiratory system to
              reduce inflammation, seasonal allergies. The warmth of a sauna
              opens the pores of the skin, give your body a refreshment.
              Himalayan salt sauna is also known for being highly relaxing and
              stress-reducing.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 py-6 lg:py-12 flex flex-col-reverse md:flex-row gap-8">
          <div className="flex flex-col justify-center w-full md:w-1/2 text-lg font-extralight gap-6 px-8">
            <div>
              <h2 className="uppercase font-titleBig text-xl">Jacuzzi </h2>
            </div>
            <p className="text-sm lg:text-base font-title font-extralight">
              Jacuzzi is known for muscle relaxation and joint pain relief. It
              helps balance your nervous system and to keep it in balance. Soak
              your body in hot water also relieves muscle tension and reduces
              cardiovascular stress. Warm water also improve Blood Circulation.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <img src={Jac} alt="Cascade Jacuzzi" className="w-full h-auto" />
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 py-6 lg:py-12 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-auto">
            <img
              src={Scrub}
              alt="Cascade Body Scrub"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2 text-lg font-extralight gap-6 px-8">
            <div>
              <h2 className="uppercase font-titleBig text-xl">
                Body Scrub & Vichy shower
              </h2>
            </div>
            <p className="text-sm lg:text-base font-title font-extralight">
              Body scrub removes dead skin cells with a smoothing and relaxing
              body polish. It is a gentle moisturizing scrub treatment for the
              body.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 py-6 lg:py-12 flex flex-col-reverse md:flex-row gap-8">
          <div className="flex flex-col justify-center w-full md:w-1/2 text-lg font-extralight gap-6 px-8">
            <div>
              <h2 className="uppercase font-titleBig text-xl">
                Group, Gathering, & Parties.
              </h2>
              <span className="uppercase font-title text-sm">
                (CALL FOR MORE INFORMATION)
              </span>
            </div>
            <p className="text-sm lg:text-base font-title font-extralight">
              It’s party time! Whether its friends gathering, girls night out,
              bachelor or bachelorette parties, birthday parties or even a
              company event/retreat. Let us be your guide and the place to go.
              We offer the best spa parties in the area! Your party could only
              be the best experience possible. Questions? Please contact us by
              calling 619-542-9778
            </p>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <Carousel />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlanYourDay;

export const Head = () => <title>Plan Your Day | Cascade Spa</title>;
