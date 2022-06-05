import React from 'react';

export default function Carousel() {
  return (
    <section className="home-slider owl-carousel">
      <div className="slider-item">
        <div className="container">
          <div
            className="row d-flex slider-text justify-content-center align-items-center"
            data-scrollax-parent="true"
          >
            <div
              className="img"
              style={{ backgroundImage: 'url(images/xbg_1.jpg.pagespeed.ic.xG6CIl0xUd.webp)' }}
            />
            <div className="text d-flex align-items-center ftco-animate">
              <div className="text-2 pb-lg-5 mb-lg-4 px-4 px-md-5">
                <h3 className="subheading mb-3">Featured Posts</h3>
                <h1 className="mb-5">Love the Delicious &amp; Tasty Foods</h1>
                <p className="mb-md-5">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia
                </p>
                <p>
                  <a href="##" className="btn btn-black px-3 px-md-4 py-3">
                    Read More <span className="icon-arrow_forward ml-lg-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="container">
          <div
            className="row d-flex slider-text justify-content-center align-items-center"
            data-scrollax-parent="true"
          >
            <div
              className="img"
              style={{ backgroundImage: 'url(images/xbg_2.jpg.pagespeed.ic.xAgs89aZuG.webp)' }}
            />
            <div className="text d-flex align-items-center ftco-animate">
              <div className="text-2 pb-lg-5 mb-lg-4 px-4 px-md-5">
                <h3 className="subheading mb-3">Featured Posts</h3>
                <h1 className="mb-5">I am A Blogger &amp; I Love Foods</h1>
                <p className="mb-md-5">
                  A small river named Duden flows by their place and supplies it with the necessary
                  regelialia
                </p>
                <p>
                  <a href="##" className="btn btn-black px-3 px-md-4 py-3">
                    Read More <span className="icon-arrow_forward ml-lg-4" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
