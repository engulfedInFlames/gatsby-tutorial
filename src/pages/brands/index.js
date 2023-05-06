import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import * as brandsStyle from "../../styles/brands.module.css";

export default function Brands({ data }) {
  const pages = data.allMarkdownRemark.pages;
  return (
    <Layout>
      <div className={brandsStyle.brands}>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <Link to={`/brands/${page.frontmatter.slug}/`}>
                <GatsbyImage
                  image={getImage(
                    page.frontmatter.thumb.childImageSharp.gatsbyImageData
                  )}
                  placeholder="blurred"
                  width={500}
                  height={500}
                />
              </Link>
              <Link to={`/brands/${page.frontmatter.slug}`}>
                <h3>{page.frontmatter.title}</h3>
                <p>{page.frontmatter.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BrandPages {
    allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
      pages: nodes {
        frontmatter {
          title
          description
          slug
          date
          thumb {
            childImageSharp {
              gatsbyImageData(
                width: 250
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }
`;
