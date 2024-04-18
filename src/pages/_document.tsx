import { Html, Head, Main, NextScript } from "next/document";
import ldJsonData from "@/ldJsonData.json";

const Document = (): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:type" content="website" />
        <meta property="fb:admins" content="785845464803058" />
        <meta name="author" content="resi.uatz.view.com.au" />
        <meta name="author" content="resi.uatz.view.com.au" />
        <meta name="apple-itunes-app" content="app-id=474698182" />
        <meta name="theme-color" content="#FFFFFF" />
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
        <script
          id="ldJson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJsonData) }}
        />
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
