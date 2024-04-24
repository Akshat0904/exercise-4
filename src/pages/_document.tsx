import { Html, Head, Main, NextScript } from "next/document";

interface IMetaData {
  name?: string;
  property?: string;
  content: string;
}

const Document = (): JSX.Element => {
  const renderGeneralMetaTags = (): JSX.Element => {
    return (
      <>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="resi.uatz.view.com.au" />
        <meta name="apple-itunes-app" content="app-id=474698182" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta property="og:type" content="website" />
        <meta property="fb:admins" content="785845464803058" />
      </>
    );
  };

  const renderSmartBannerMetaTags = (): JSX.Element => {
    return (
      <>
        <meta
          name="smartbanner:title"
          content="resi.uatz.view.com.au - Real Estate"
        />
        <meta name="smartbanner:author" content="resi.uatz.view.com.au" />
        <meta name="smartbanner:price" content="FREE" />
        <meta
          name="smartbanner:price-suffix-apple"
          content=" - On the App Store"
        />
        <meta
          name="smartbanner:price-suffix-google"
          content=" - In Google Play"
        />
        <meta name="smartbanner:icon-apple" content="/images/apple-icon.png" />
        <meta
          name="smartbanner:icon-google"
          content="/images/android-icon.png"
        />
        <meta name="smartbanner:button" content="INSTALL" />
        <meta
          name="smartbanner:button-url-apple"
          content="https://itunes.apple.com/au/app/view-com-au-real-estate/id474698182?mt=8"
        />
        <meta
          name="smartbanner:button-url-google"
          content="https://play.google.com/store/apps/details?id=au.com.realestateview&amp;hl=en"
        />
        <meta name="smartbanner:enabled-platforms" content="android" />
        <meta name="smartbanner:hide-path" content="/" />
        <meta name="smartbanner:hide-ttl" content="1209600" />
      </>
    );
  };

  // const metaData: IMetaData[] = [
  //   {
  //     name: "apple-mobile-web-app-capable",
  //     content: "yes",
  //   },
  //   {
  //     name: "author",
  //     content: "resi.uatz.view.com.au",
  //   },
  //   {
  //     name: "apple-itunes-app",
  //     content: "app-id=474698182",
  //   },
  //   {
  //     name: "theme-color",
  //     content: "#FFFFFF",
  //   },
  //   {
  //     name: "smartbanner:title",
  //     content: "resi.uatz.view.com.au - Real Estate",
  //   },
  //   {
  //     name: "smartbanner:author",
  //     content: "resi.uatz.view.com.au",
  //   },
  //   {
  //     name: "smartbanner:price",
  //     content: "FREE",
  //   },
  //   {
  //     name: "smartbanner:price-suffix-apple" ,
  //     content: " - On the App Store",
  //   },
  //   {
  //     name: "smartbanner:price-suffix-google",
  //     content: " - In Google Play",
  //   },
  //   {
  //     name: "smartbanner:icon-apple" ,
  //     content: ,
  //   },
  //   {
  //     name: ,
  //     content: ,
  //   },
  //   {
  //     name: ,
  //     content: ,
  //   },
  //   {
  //     property: "og:type",
  //     content: "website",
  //   },
  //   {
  //     property: "fb:admins",
  //     content: "785845464803058",
  //   },
  // ];

  return (
    <Html lang="en">
      <Head>
        {renderGeneralMetaTags()}
        {renderSmartBannerMetaTags()}
      </Head>
      <body>
        <Main />
        <div id="portal"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
