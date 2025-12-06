import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  schema?: object;
}

export function SEO({
  title,
  description,
  keywords = "nursery plants, outdoor plants, fruit plants, flowering plants, wholesale plants, farm plants, Aligarh nursery",
  image = "/plants/hero/nursery-hero.jpg",
  url = "",
  type = "website",
  schema,
}: SEOProps) {
  const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const fullUrl = `${siteUrl}${url}`;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.name,
    description: description,
    image: fullImage,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.state,
      addressCountry: BUSINESS_INFO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.8974",
      longitude: "78.0880",
    },
    url: siteUrl,
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema || localBusinessSchema)}
      </script>
    </Helmet>
  );
}
