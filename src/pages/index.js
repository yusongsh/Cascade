import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
    <div>
      <h1>Home Page</h1>
      <p>Phone: {homepage.phone}</p>
      {/* Use other data properties in a similar manner */}
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
