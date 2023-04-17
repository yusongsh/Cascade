import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      {/* Use other data properties in a similar manner */}
    </div>
  );
};

export default AboutPage;

export const Head = () => <title>About - Cascade Spa</title>;
