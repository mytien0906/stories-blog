import React from 'react';

export default function RecipeItem() {
  return (
    <div className="col-md-6 col-lg-6 ftco-animate">
      <div className="blog-entry">
        <div
          className="img img-big img-big-2 d-flex align-items-end"
          style={{
            backgroundImage: 'url(/images/ximage_1.jpg.pagespeed.ic.mCubnKtcwW.webp)',
          }}
        >
          <div className="overlay" />
          <div className="text">
            <span className="subheading">Food</span>
            <h3>
              <a href="##">ham sandwich on white surface</a>
            </h3>
            <p className="mb-0">
              <a href="##" className="btn-custom">
                Read More <span className="icon-arrow_forward ml-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
