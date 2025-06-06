import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author = "Sanket Banerjee",
  twitterHandle = "@sanket__dev",
  noIndex = false,
  canonicalUrl,
  structuredData,
}) => {
  const baseUrl = "https://sanket-new-portfolio.vercel.app";
  const defaultImage = `${baseUrl}/images/og.png`;

  const seoTitle = title
    ? `${title} | Sanket Banerjee`
    : "Sanket Banerjee | Full-Stack Developer";
  const seoDescription =
    description ||
    "Passionate Full-Stack Developer from India specializing in scalable web and mobile applications with React, Node.js, Flutter, and modern technologies.";
  const seoImage = image || defaultImage;
  const seoUrl = url ? `${baseUrl}${url}` : baseUrl;
  const seoKeywords =
    keywords ||
    "Sanket Banerjee, Full Stack Developer, React, Node.js, Flutter, JavaScript, TypeScript, MongoDB, Express, Software Engineer, Web Developer, Mobile App Developer, Portfolio";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={author} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#000000" />

      {/* sitemap */}
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href={`${baseUrl}/sitemap.xml`}
      />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:alt" content={`${seoTitle} - Portfolio`} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content="Sanket Banerjee Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:image:alt" content={`${seoTitle} - Portfolio`} />

      {/* Additional SEO Tags */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Kolkata" />
      <meta name="geo.position" content="22.5726;88.3639" />
      <meta name="ICBM" content="22.5726, 88.3639" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link rel="dns-prefetch" href="https://formsubmit.co" />
    </Helmet>
  );
};

export default SEO;
