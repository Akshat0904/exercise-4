import Head from "next/head";
import { IAddress } from "../developmentDetail.interface";

interface IProps {
  address: IAddress;
  title: string;
}

const DevelopmentDetailsSeo = ({ address, title }: IProps) => {
  const COMPLETE_ADDRESS = `${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area}, ${address.state} ${address.postalCode}`;

  return (
    <Head>
      {" "}
      <title>
        {`${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area} | Apartments for Sale | ${address.state} - resi.uatz.view.com.au`}
      </title>
      <meta
        property="og:title"
        content={`${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area} | Apartments for Sale | ${address.state} - resi.uatz.view.com.au`}
      />
      <meta
        name="twitter:title"
        content={`${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area} | Apartments for Sale | ${address.state} - resi.uatz.view.com.au`}
      />
      <meta
        name="description"
        content={`Arbour Park is located on ${COMPLETE_ADDRESS}. Pricing and Photos available for this New Development by ${title}. Visit the site for more details!`}
      />
      <meta
        property="og:description"
        content={`Arbour Park is located on ${COMPLETE_ADDRESS}. Pricing and Photos available for this New Development by ${title}. Visit the site for more details!`}
      />
      <meta
        name="twitter:description"
        content={`Arbour Park is located on ${COMPLETE_ADDRESS}. Pricing and Photos available for this New Development by ${title}. Visit the site for more details!`}
      />
      <meta
        property="og:street-address"
        content={`${address.thoroughfareNumber} ${address.thoroughfare}, ${address.area}`}
      />
      <meta property="og:locality" content={address.area} />
      <meta property="og:postal-code" content={address.postalCode} />
      <meta property="og:country-name" content={address.country} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ViewComAu" />
      <meta name="twitter:creator" content="@ViewComAu" />
      <meta
        property="og:image"
        content="https://d126h31mg8tzcs.cloudfront.net/arbour-park/file/thumbnail/images-1200x5501.jpg"
      />
      <meta
        name="twitter:image"
        content="https://d126h31mg8tzcs.cloudfront.net/arbour-park/file/thumbnail/images-1200x5501.jpg"
      />
      <link
        rel="canonical"
        href="https://resi.uatz.view.com.au/new-developments/vic-surrey-hills-3127/development-details/arbour-park/"
      />
    </Head>
  );
};

export default DevelopmentDetailsSeo;
