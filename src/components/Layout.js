import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import "../styles/global.css";
import Header from "./Header";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          copyright
        }
      }
    }
  `);
  const { title, copyright } = data.site.siteMetadata;

  return (
    <div className="layout">
      <Header title={title} />
      <main>{children}</main>
      <footer>
        <p>&copy; {copyright}</p>
      </footer>
    </div>
  );
}
