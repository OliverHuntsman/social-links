import React from "react"
import { Link } from "gatsby"
// import PropTypes from 'prop-types'
// import Layout from "../components/layout"
import Image from "../components/image"
// import SEO from "../components/seo"
// import Features from "./components/Features"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  slug,
  intro,
}) => (
<div>
    {/* <SEO title="Home" /> */}
    <section className="section">
          <div className="container">
            <div className="content">
              {/* <Features /> */}
            </div>
          </div>
    </section> 
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
</div>
)



// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   slug: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

// const IndexPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         image={frontmatter.image}
//         title={frontmatter.title}
//         heading={frontmatter.heading}
//         subheading={frontmatter.subheading}
//         mainpitch={frontmatter.mainpitch}
//         description={frontmatter.description}
//         intro={frontmatter.intro}
//         slug={frontmatter.slug}
//       />
//     </Layout>
//   )
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }


// export default IndexPage

// export const pageQuery = graphql`
// query IndexPageTemplate {
//   markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
//     frontmatter {
//       title
//       image {
//         childImageSharp {
//           fluid( maxWidth: 800, quality:100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }

//       heading
//       subheading
//       mainpitch {
//         title
//         description
//       }

//       description
//       intro {
//         blurbs {
//           banner {
//             childImageSharp {
//               fluid(maxWidth: 500, quality:100){
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           image {
//             childImageSharp {
//               fluid(maxWidth: 150, quality: 100){
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           text
//           slug
//           name
        
//         }
//         heading2
//         description
//       }
//     }
//   }
// }
// `
