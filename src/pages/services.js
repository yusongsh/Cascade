import React from "react";
import serviceHero from "../assets/Cascade_Spa_Images-13.jpg";
import CascadeCage from "../assets/Cascade-bird-cage-1.webp";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import Layout from "../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulServices {
        edges {
          node {
            name
            order
            price1
            price2
            description {
              description
            }
          }
        }
      }
      allContentfulScrub {
        edges {
          node {
            name
            price
            description {
              description
            }
          }
        }
      }
    }
  `);

  const servicesData = data.allContentfulServices.edges;
  const scrubData = data.allContentfulScrub.edges;
  console.log(servicesData, scrubData);

  //testing for all data by ascent order
  const sortedEdges = data.allContentfulServices.edges.sort(
    (a, b) => a.node.order - b.node.order
  );
  sortedEdges.map((edge) => {
    const service = edge.node;

    // Do something with each service data here
    console.log(service.name);
  });

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="At Cascade Spa, we offer a variety of wellness services from massages and facials to body treatments. Explore our services and find the perfect treatment tailored to your needs."
        />
      </Helmet>

      <section className="relative">
        <img
          src={serviceHero}
          alt="home hero bg"
          className="w-full lg:max-h-[450px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-auto">
          <img
            src={Tiltlebg}
            alt="section title hero bg"
            className="w-80 h-auto object-cover"
          />
          <div className="absolute z-10 inset-0 flex items-center justify-center">
            <span className="text-white text-[1.8rem] lg:text-[2rem] font-titleBig">
              SERVICES
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <div className="mt-16 mb-8 lg:mb-4">
          <div className="border-b border-main-gold w-[100%] "></div>

          <div className="flex flex-col justify-between px-4 md:px-8 lg:px-0">
            <div className="my-8 lg:my-12 uppercase text-2xl lg:text-3xl font-titleBig">
              MASSAGE {""}
              <span className="text-sm  lg:text-base">
                (Please call for more details.)
              </span>
            </div>
            <div className="-z-10 absolute opacity-60 lg:opacity-90 left-[80%] md:left-[80%] lg:left-[65%]">
              <img src={CascadeCage} className="w-[5rem] h-auto" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-0">
          <div className="grid-flow-row columns-1 md:columns-2 gap-32">
            {sortedEdges.map((edge, index) => {
              const service = edge.node;
              return (
                <div
                  key={index}
                  className="flex flex-col mb-12 lg:mb-16 break-inside-avoid"
                >
                  <h2 className="text-[1.4rem] lg:text-2xl font-titleBig text-main-gold uppercase">
                    {service.name}
                  </h2>
                  <div className="py-3 text-sm font-title font-light text-main-gold italic">
                    {" "}
                    <p>{service.price1}</p>
                    {service.price2 && <p>{service.price2}</p>}
                  </div>
                  <p className="pt-2 font-light font-title text-sm">
                    {service.description.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-b border-main-gold w-[100%] my-16"></div>

        <div className="px-4 md:px-8 lg:px-0 flex flex-col my-8 lg:my-12 text-2xl lg:text-3xl font-titleBig">
          <div>SCRUB</div>
          <div className="text-xs font-sans lg:text-sm">
            *Body scrubs are conducted in the gender-separated scrub rooms.
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 grid-flow-row columns-1 md:columns-2 gap-32">
          {scrubData.map(({ node }, index) => (
            <div
              key={index}
              className="flex flex-col mb-12 lg:mb-16 break-inside-avoid"
            >
              <h2 className="text-[1.4rem] lg:text-2xl font-titleBig text-main-gold uppercase">
                {node.name}
              </h2>
              <div className="py-3 text-sm font-title font-light text-main-gold italic">
                <p>{node.price}</p>
              </div>
              <p className="pt-2 font-light font-title text-sm">
                {node.description.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border-b border-main-gold w-[100%] my-16"></div>

        <div className="px-4 md:px-8 lg:px-0 mb-16 flex flex-row justify-between uppercase text-2xl font-titleBig underline underline-offset-8">
          <Link to="/packages">Package</Link>
          <Link to="/facial">Facial</Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => <title>Services | Cascade Spa</title>;
