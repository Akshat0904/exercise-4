import Head from "next/head";
import { IAddress } from "../../developmentDetail.interface";

interface IProps {
  address: IAddress;
  title: string;
  image: string;
  bedrooms: string;
  bathrooms: string;
}

const DevelopmentDetailsSeo = ({
  address,
  title,
  image,
  bedrooms,
  bathrooms,
}: IProps) => {
  const COMPLETE_ADDRESS = `${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area}, ${address.state} ${address.postalCode}`;

  const TITLE = `${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area} | Apartments for Sale | ${address.state} - resi.uatz.view.com.au`;

  const DESCRIPTION = `${title} is located on ${COMPLETE_ADDRESS}. Pricing and Photos available for this New Development by ${title}. Visit the site for more details!`;

  const renderLdJsonScript = (): JSX.Element => {
    return (
      <script
        id="ldJson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "resi.uatz.view.com.au",
            url: "https://resi.uatz.view.com.au/",
            logo: "https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/viewLogo.8f31e2e5.svg",
            "@graph": [
              {
                "@type": "Apartment",
                name: { title },
                url: "https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/development-details/arbour-park/",
                image: { image },
                numberOfBedrooms: { bedrooms },
                numberOfBathroomsTotal: { bathrooms },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: `${address.area}`,
                  streetAddress: `${address.thoroughfareNumber} ${address.thoroughfare}`,
                  postalCode: `${address.postalCode}`,
                  addressCountry: {
                    "@type": "Country",
                    name: `${address.country}`,
                  },
                  areaServed: {
                    "@type": "AdministrativeArea",
                    name: `${address.area}`,
                  },
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: `${address.latitude}`,
                  longitude: `${address.longitude}`,
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    item: "https://resi.uatz.view.com.au/new-developments/",
                    position: 1,
                    "@type": "ListItem",
                    name: "WebPage",
                  },
                  {
                    item: "https://resi.uatz.view.com.au/new-developments/in-vic-surrey-hills-3127/",
                    position: 2,
                    "@type": "ListItem",
                    name: "SearchResultsPage",
                  },
                  {
                    item: "https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/development-details/arbour-park/",
                    position: 3,
                    "@type": "ListItem",
                    name: "DevelopmentDetailPage",
                  },
                ],
              },
            ],
          }),
        }}
      />
    );
  };

  const renderGeneralMetaTags = (): JSX.Element => {
    return (
      <>
        <meta name="twitter:title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ViewComAu" />
        <meta name="twitter:creator" content="@ViewComAu" />
        <meta
          name="twitter:image"
          content="https://d126h31mg8tzcs.cloudfront.net/arbour-park/file/thumbnail/images-1200x5501.jpg"
        />
      </>
    );
  };

  const renderOpenGraphMetaTags = (): JSX.Element => {
    return (
      <>
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta
          property="og:street-address"
          content={`${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area}`}
        />
        <meta property="og:locality" content={address.area} />
        <meta property="og:postal-code" content={address.postalCode} />
        <meta property="og:country-name" content={address.country} />

        <meta
          property="og:image"
          content="https://d126h31mg8tzcs.cloudfront.net/arbour-park/file/thumbnail/images-1200x5501.jpg"
        />
      </>
    );
  };

  return (
    <Head>
      <title>{TITLE}</title>
      {renderGeneralMetaTags()}
      {renderOpenGraphMetaTags()}
      <link
        rel="canonical"
        href="https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/development-details/arbour-park/"
      />
      {renderLdJsonScript()}
    </Head>
  );
};

export default DevelopmentDetailsSeo;
