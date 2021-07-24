import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const post = data.mdx;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>Posted: {post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
    }
  }
`;

export default BlogPost;
