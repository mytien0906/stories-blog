import React from 'react';

export default function LargeStory() {
  return (
    <div className="col-md-6 order-md-last col-lg-6 ftco-animate">
      <div className="blog-entry">
        <div
          className="img img-big d-flex align-items-end"
          style={{
            backgroundImage: 'url(/images/ximage_2.jpg.pagespeed.ic.OXlNmsE0MY.webp)',
          }}
        >
          <div className="overlay" />
          <div className="text">
            <span className="subheading">Food</span>
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
    </div>
  );
}
