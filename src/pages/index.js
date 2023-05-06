import * as React from "react";

import Layout from "../components/Layout";
import * as homeStyles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <div className={homeStyles.home}>
        <div>
          <h1>Basic Gatsby</h1>
          <h3>How does Gatsby work?</h3>
        </div>
        <GatsbyImage image={image} alt="Gatsby Logo Wihte" />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Image {
    file(relativePath: { eq: "gatsby_logo_white.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
