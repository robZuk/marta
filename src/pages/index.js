import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
};
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
};
const linkStyles = {
  color: "#8954A8",
};

// data
const links = [
  {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
  },
  {
    text: "Tutorials",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "Guides",
    url: "https://www.gatsbyjs.com/tutorial/",
  },
  {
    text: "API Reference",
    url: "https://www.gatsbyjs.com/docs/api-reference/",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
  },
  {
    text: "Cheat Sheet",
    url: "https://www.gatsbyjs.com/docs/cheat-sheet/",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Congratulations</h1>
      <h2>Robert Żuk</h2>
    </main>
  );
};

export default IndexPage;
