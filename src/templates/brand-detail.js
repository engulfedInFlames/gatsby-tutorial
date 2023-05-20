import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import * as brandDetailStyles from "../styles/brand-detail.module.css";

export default function BrandDetail({ data }) {
  const { html } = data.markdownRemark;
  const { description, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={brandDetailStyles.detail}>
        <div className={brandDetailStyles.featured}>
          <GatsbyImage image={getImage(featuredImg)} />
        </div>
        <h3>{description}</h3>
        <div
          className={brandDetailStyles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BrandDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`;
