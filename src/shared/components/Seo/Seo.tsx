import * as React from 'react';
import { Helmet } from 'react-helmet';

export const Seo = ({
  buildTime,
  description,
  firstPublicationDate,
  image,
  logo,
  title,
  websiteAuthor,
  websiteBaseUrl,
  websiteName,
  websiteThemeColor,
}) => {
  if (!title) {
    return null;
  }

  const ldjson = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: websiteBaseUrl,
    headline: title,
    inLanguage: 'fr',
    mainEntityOfPage: websiteBaseUrl,
    description: description || '',
    name: title,
    author: {
      '@type': 'Person',
      name: websiteAuthor,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: websiteAuthor,
    },
    copyrightYear: new Date().getFullYear(),
    creator: {
      '@type': 'Person',
      name: websiteAuthor,
    },
    publisher: {
      '@type': 'Person',
      name: websiteAuthor,
    },
    datePublished: firstPublicationDate,
    dateModified: buildTime || '',
    image: {
      '@type': 'ImageObject',
      url: image?.url || '',
    },
  };

  return (
    <>
      <Helmet>
        <html lang={'fr'} />
      </Helmet>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta content={description || ''} name='description' />
      <meta content={image?.url || ''} name='image' />
      <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
      <meta
        content='width=device-width, initial-scale=1, user-scalable=yes'
        name='viewport'
      />
      <link href={websiteBaseUrl} rel='canonical' />

      {/* OpenGraph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description || ''} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={websiteName} />
      <meta property='og:locale' content={'fr'} />
      <meta property='og:url' content={websiteBaseUrl} />
      <meta property='og:image' content={image?.url || ''} />
      <meta property='og:image:alt' content={image?.alt || ''} />
      <meta property='og:image:width' content='1200' data-react-helmet='true' />
      <meta property='og:image:height' content='627' data-react-helmet='true' />

      {/* Icons */}
      <meta content={websiteThemeColor} name='msapplication-TileColor' />
      <meta content={websiteThemeColor} name='theme-color' />
      <meta content={logo?.url} name='msapplication-TileImage' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={websiteAuthor} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description || ''} />
      <meta content={image?.url || ''} name='twitter:image' />
      <meta content={image?.alt || ''} name='twitter:image:alt' />

      {/* ld+json */}
      <script type='application/ld+json'>{JSON.stringify(ldjson)}</script>
    </>
  );
};
