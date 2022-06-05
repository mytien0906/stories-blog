/* eslint-disable @next/next/no-sync-scripts */
import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,900" />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i" />
        <link
          rel="stylesheet"
          href="/css/A.open-iconic-bootstrap.min.css+animate.css+owl.carousel.min.css+owl.theme.default.min.css+magnific-popup.css+aos.css+ionicons.min.css+flaticon.css+icomoon.css+style.css,Mcc.ufEHjH_Ugn.css.pagespeed.cf.rG9_1ReTDC.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.0.0-19/css/ionicons.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/icomoon@1.0.0/fonts/icomoon.ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/jquery.min.js" />
        <script src="/js/jquery-migrate-3.0.1.min.js+popper.min.js+bootstrap.min.js.pagespeed.jc.0OfK9Bjt_O.js" />
        <script src="/js/jquery.easing.1.3.js+jquery.waypoints.min.js+jquery.stellar.min.js+owl.carousel.min.js.pagespeed.jc.MGzVz1Dpu4.js" />
        <script src="/js/jquery.magnific-popup.min.js+aos.js+jquery.animateNumber.min.js+scrollax.min.js+google-map.js+main.js.pagespeed.jc.oTQpoljXL_.js" />
      </body>
    </Html>
  );
}
