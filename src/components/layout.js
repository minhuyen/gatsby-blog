import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Navbar, Container, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { container, navLinkText } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <main className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar>
        <Container>
          <Navbar.Brand>{data.site.siteMetadata.title}</Navbar.Brand>
        </Container>
        <Nav>
          <Nav.Item>
            <Link to="/" className={navLinkText}>
              <Nav.Link as="span" eventKey="link-1">
                Home
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className={navLinkText}>
              <Nav.Link as="span" eventKey="link-1">
                About
              </Nav.Link>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/blog" className={navLinkText}>
              <Nav.Link as="span" eventKey="link-1">
                Articles
              </Nav.Link>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>

      <Container>
        {/* <h1 className={heading}>{pageTitle}</h1> */}
        {children}
      </Container>
    </main>
  );
};
export default Layout;
