import React from 'react';

export default function BreadCrumb() {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: 'url(/images/xbg_4.jpg.pagespeed.ic.BIRPvCTlWg.webp)' }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text align-items-end justify-content-center">
          <div className="col-md-9 ftco-animate pb-5 text-center fadeInUp ftco-animated">
            <h1 className="mb-3 bread">HI MTien</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="index.html">
                  Home <i className="ion-ios-arrow-forward" />
                </a>
              </span>
              <span>
                Single Page
                <i className="ion-ios-arrow-forward" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
