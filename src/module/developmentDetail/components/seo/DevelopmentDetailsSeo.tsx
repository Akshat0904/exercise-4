import Head from "next/head";
import { IAddress } from "../../developmentDetail.interface";
import { MetaHTMLAttributes } from "react";

interface IProps {
  address: IAddress;
  title: string;
  image: string;
  bedrooms: string;
  bathrooms: string;
}

interface IMetaData {
  name?: string;
  property?: string;
  content: string;
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

  const metaData: IMetaData[] = [
    {
      name: "description",
      content: DESCRIPTION,
    },
    {
      name: "twitter:title",
      content: TITLE,
    },
    {
      name: "twitter:description",
      content: DESCRIPTION,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@ViewComAu",
    },
    {
      name: "twitter:site",
      content: "@ViewComAu",
    },
    {
      name: "twitter:image",
      content:
        "https://d126h31mg8tzcs.cloudfront.net/arbour-park/file/thumbnail/images-1200x5501.jpg",
    },
    {
      property: "og:title",
      content: TITLE,
    },
    {
      property: "og:description",
      content: DESCRIPTION,
    },
    {
      property: "og:street-address",
      content: `${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area}`,
    },
    {
      property: "og:locality",
      content: address.area,
    },
    {
      property: "og:postal-code",
      content: address.postalCode,
    },
    {
      property: "og:country-name",
      content: address.country,
    },
    {
      property: "og:image",
      content:
        "https://d126h31mg8tzcs.cloudfront.net/arbour-park/file/thumbnail/images-1200x5501.jpg",
    },
  ];

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

  const renderMetaTags = (): JSX.Element => {
    return (
      <>
        {metaData.map((meta, index) => (
          <meta key={index} {...meta} />
        ))}
      </>
    );
  };

  return (
    <Head>
      <title>{TITLE}</title>
      {renderMetaTags()}
      <link
        rel="canonical"
        href="https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/development-details/arbour-park/"
      />
      {renderLdJsonScript()}
    </Head>
  );
};

export default DevelopmentDetailsSeo;
