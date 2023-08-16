import { graphql } from "gatsby"
import * as React from "react"

import { HomepageLayout } from "../templates/HomepageLayout"
import { Seo } from "../shared/components/Seo"

const IndexPage = ({ data }) => {
  if (!data) {
    return null
  }

  const {
    title: { text: title },
    meta_logo: metaLogo,
  } = data?.homepage?.data || []

  const logo = metaLogo?.thumbnails?.logo || {}

  return (
    <HomepageLayout title={title} logo={logo}>
      <></> {/* Components here */}
    </HomepageLayout>
  )
}

export const Head = ({ data }) => {
  if (!data) {
    return null
  }

  const { buildTime } = data?.site || ""

  const {
    meta_title: metaTitle,
    meta_description: metaDesc,
    meta_image: metaImage,
    logo: metaLogo,
  } = data?.homepage?.data || ""

  const { seo } = metaImage?.thumbnails || {}
  const { logo } = metaLogo?.thumbnails || {}

  return (
    <Seo
      buildTime={buildTime}
      title={metaTitle}
      description={metaDesc}
      image={seo}
      logo={logo}
    />
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query Homepage {
    site: site {
      buildTime(formatString: "YYYY-MM-DD")
    }
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        meta_title
        meta_description
        meta_image {
          thumbnails {
            seo {
              alt
              url
            }
          }
          dimensions {
            height
            width
          }
        }
        meta_logo {
          alt
          url
          thumbnails {
            logo {
              alt
              url
            }
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`
