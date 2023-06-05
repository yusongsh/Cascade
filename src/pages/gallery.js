import React, { useState } from "react";
import MasonryGrid from "../components/MasonryGrid";
import Lightbox from "../components/Lightbox";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Tiltlebg from "../assets/Cascadep-Spa-title.png";

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulGallery {
        edges {
          node {
            photos {
              url
            }
          }
        }
      }
    }
  `);

  const gallery = data.allContentfulGallery.edges[0].node.photos;
  console.log(gallery);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageSrc, setLightboxImageSrc] = useState(null);

  // const handleImageClick = (src) => {
  //   setLightboxImageSrc(src);
  //   setLightboxOpen(true);
  // };

  // const closeLightbox = () => {
  //   setLightboxOpen(false);
  // };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveIndex(null);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < gallery.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-12 px-6 max-w-5xl h-auto flex flex-col justify-center items-center m-auto">
        <div className="relative w-80 h-auto">
          <img
            src={Tiltlebg}
            alt="section title hero bg"
            className="w-80 h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-[1.8rem] lg:text-[2rem] font-titleBig uppercase">
              Gallery
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-24 px-4 lg:px-0">
        <MasonryGrid>
          {gallery.map((photo, index) => (
            <div
              key={index}
              className="mb-2 cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img src={photo.url} alt={photo.description} />
            </div>
          ))}
        </MasonryGrid>
        {lightboxOpen && (
          <Lightbox
            isOpen={lightboxOpen}
            onRequestClose={closeLightbox}
            src={gallery[activeIndex]?.url}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </section>
    </Layout>
  );
};

export default GalleryPage;

export const Head = () => <title>Gallery - Cascade Spa</title>;
