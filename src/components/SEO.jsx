import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image }) => {
  const siteTitle = "Alicia Esquivel - PhD Candidate";
  const defaultDescription =
    "PhD Candidate specializing in cloud computing, cybersecurity, and resilient network design. " +
    "Research focused on zero-trust architectures and AI-driven security solutions.";
  const siteUrl = "https://aliciaesquivel.com"; // Update with your actual domain
  const defaultImage = "/og-image.png"; // Add your Open Graph image

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:title"
        content={title ? `${title} | ${siteTitle}` : siteTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="og:image"
        content={`${siteUrl}${image || defaultImage}`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta
        name="twitter:title"
        content={title ? `${title} | ${siteTitle}` : siteTitle}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        name="twitter:image"
        content={`${siteUrl}${image || defaultImage}`}
      />

      {/* Additional metadata */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default SEO;
