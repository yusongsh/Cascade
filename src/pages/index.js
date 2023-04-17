import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl">Home</h1>
        {/* Use other data properties in a similar manner */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home - Cascade Spa</title>;
