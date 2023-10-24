import { graphql } from 'gatsby';
import * as React from 'react';

import { Seo } from '../shared/components/Seo';
import { HomepageLayout } from '../templates/HomepageLayout';

const IndexPage = ({ data }) => {
  const {
    title: { text: title },
    meta_logo: metaLogo,
  } = data?.homepage?.data || [];

  const logo = metaLogo?.thumbnails?.logo || {};

  return (
    <HomepageLayout title={title} logo={logo}>
      <></> {/* Components here */}
    </HomepageLayout>
  );
};

export const Head = ({ data }) => {
  if (!data) {
    return null;
  }

  const { buildTime } = data?.site || '';
  const firstPublicationDate = data?.homepage?.first_publication_date || '';

  const {
    meta_title: metaTitle,
    meta_description: metaDesc,
    meta_image: metaImage,
    logo: metaLogo,
    website_name: websiteName,
    website_author: websiteAuthor,
    website_base_url: websiteBaseUrl,
    website_theme_color: websiteThemeColor,
  } = data?.homepage?.data || '';

  const { seo } = metaImage?.thumbnails || {};
  const { logo } = metaLogo?.thumbnails || {};

  return (
    <Seo
      buildTime={buildTime}
      description={metaDesc}
      firstPublicationDate={firstPublicationDate}
      image={seo}
      logo={logo}
      title={metaTitle}
      websiteAuthor={websiteAuthor}
      websiteBaseUrl={websiteBaseUrl}
      websiteName={websiteName}
      websiteThemeColor={websiteThemeColor}
    />
  );
};

export default IndexPage;

export const IndexQuery = graphql`
  query Homepage {
    site: site {
      buildTime(formatString: "YYYY-MM-DD")
    }
    homepage: prismicHomepage {
      first_publication_date
      data {
        title {
          text
        }
        website_name
        website_author
        website_base_url
        website_theme_color
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
`;
