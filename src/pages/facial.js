import React from "react";
import Layout from "../components/Layout";
import FacialHero from "../assets/Cascade_Facial.jpg";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import CascadeCage from "../assets/Cascade-bird-cage-1.webp";
import { Link, graphql, useStaticQuery } from "gatsby";

const FacialPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFacial {
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
      allContentfulAddOns {
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

  const facialData = data.allContentfulFacial.edges;
  const addonData = data.allContentfulAddOns.edges;
  console.log(facialData);

  return (
    <Layout>
      <section className="relative">
        <img
          src={FacialHero}
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
            <span className="text-white text-[1.8rem] lg:text-[2rem] font-titleBig uppercase">
              Facials & More
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto">
        <div className="mt-16 mb-8 lg:mb-4">
          <div className="border-b border-main-gold w-[100%] "></div>

          <div className="flex flex-col justify-between px-4 md:px-8 lg:px-0">
            <div className="my-8 lg:my-12 uppercase text-2xl lg:text-3xl font-titleBig">
              FACIALS {""}
            </div>
            <div className="-z-10 absolute opacity-60 lg:opacity-90 left-[80%] md:left-[80%] lg:left-[80%]">
              <img src={CascadeCage} className="w-[5rem] h-auto" />
            </div>
          </div>
        </div>
        <div className="px-4 md:px-8 lg:px-0">
          <div className="grid-flow-row columns-1 md:columns-2 gap-32">
            {facialData.map(({ node }, index) => (
              <div
                key={index}
                className="flex flex-col mb-12 lg:mb-16 break-inside-avoid"
              >
                <h2 className="text-base lg:text-xl font-titleBig text-main-gold">
                  {node.name}
                </h2>
                <div className="py-3 text-sm font-title font-extralight text-main-gold italic">
                  <p>{node.price}</p>
                </div>
                <p className="pt-2 font-extralight font-title text-sm">
                  {node.description.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-main-gold w-[100%] my-16"></div>

        <div className="px-4 md:px-8 lg:px-0 my-8 lg:my-12 text-2xl lg:text-3xl font-titleBig">
          <div>ADD ON SERVICES</div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 mb-16 lg:mb-24 grid-flow-row columns-1 md:columns-2 gap-32">
          {addonData.map(({ node }, index) => (
            <div
              key={index}
              className="flex flex-col mb-6 lg:mb-8 break-inside-avoid"
            >
              <h2 className="text-base lg:text-xl font-titleBig text-main-gold">
                {node.name}
              </h2>
              <div className="py-3 text-sm font-title font-extralight text-white">
                <p>{node.price}</p>
              </div>
              {node.description && (
                <p className="pt-2 font-extralight font-title text-sm">
                  {node.description.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FacialPage;

export const Head = () => <title>Facials & More - Cascade Spa</title>;
