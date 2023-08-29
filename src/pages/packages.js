import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import packageHero from "../assets/Cascade_spa_Image-19.webp";
import CascadeCage from "../assets/Cascade-bird-cage-1.webp";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

const PackagesPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPackage {
        edges {
          node {
            descriptionLong {
              raw
            }
            name
            price
          }
        }
      }
    }
  `);
  const packageData = data.allContentfulPackage.edges;
  console.log(packageData);

  const options = {
    renderNode: {
      [BLOCKS.HEADING_5]: (node, children) => (
        <p className="mb-4 text-sm font-title">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-inside list-none text-sm font-title mb-0">
          {children}
        </ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="flex text-sm font-title">
          <span className="mr-2">-</span>
          <span>{children}</span>
        </li>
      ),
    },
  };

  return (
    <Layout>
      <Helmet>
        <meta
          name="description"
          content="Discover Cascade Spa's range of carefully curated spa packages, designed to provide a holistic wellness experience. Unwind and rejuvenate with our customized treatment bundles."
        />
      </Helmet>

      <section className="relative">
        <img
          src={packageHero}
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
              PACKAGES
            </span>
          </div>
        </div>
      </section>
      {/* Use other data properties in a similar manner */}

      <section className="max-w-5xl mx-auto">
        <div className="mt-16 mb-8 lg:mb-4">
          <div className="border-b border-main-gold w-[100%] "></div>

          <div className="flex flex-col justify-between px-4 md:px-8 lg:px-0">
            <div className="my-8 lg:my-12 uppercase text-2xl lg:text-3xl font-titleBig">
              PACKAGE
            </div>
            <div className="-z-10 absolute opacity-60 lg:opacity-90 left-[80%] md:left-[80%] lg:left-[65%]">
              <img src={CascadeCage} className="w-[5rem] h-auto" />
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-0 grid-flow-row columns-1 md:columns-2 gap-32">
          {packageData.map(({ node }, index) => (
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
              <div className="pt-2 font-light font-title text-sm">
                {renderRichText(node.descriptionLong, options)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto text-sm font-title my-12 lg:mt-20 lg:mb-16">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-8 px-4 md:px-8 lg:px-0">
          <p>* Bathing suits required for Jacuzzi.</p>
          <p>** Must be 21 years or older, ID required</p>
        </div>
        <div className="border-b border-main-gold w-[100%] my-16"></div>

        <div className="px-4 md:px-8 lg:px-0 mb-16 flex flex-row justify-between uppercase text-2xl font-titleBig underline underline-offset-8">
          <Link to="/services">Services</Link>
          <Link to="/facial">Facial</Link>
        </div>
      </section>
    </Layout>
  );
};

export default PackagesPage;

export const Head = () => <title>Packages | Cascade Spa</title>;
