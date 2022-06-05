import React from 'react';

export default function SmallStory() {
  return (
    <div className="col-md-6 ftco-animate">
      <div className="blog-entry">
        <a
          href="single.html"
          className="img d-flex align-items-end"
          style={{
            backgroundImage: 'url(/images/ximage_1.jpg.pagespeed.ic.mCubnKtcwW.webp)',
          }}
        >
          <div className="overlay" />
        </a>
        <div className="text pt-3">
          <p className="meta d-flex">
            <span className="pr-3">Dessert</span>
            <span className="ml-auto pl-3">March 01, 2018</span>
          </p>
          <h3>
            <a href="single.html">Tasty &amp; Delicious Foods</a>
          </h3>
          <p className="mb-0">
            <a href="single.html" className="btn-custom">
              Read More <span className="icon-arrow_forward ml-4" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
