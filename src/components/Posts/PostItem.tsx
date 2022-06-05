/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function PostItem() {
  return (
    <div className="col-md-4 ftco-animate">
      <div className="blog-entry">
        <a href="single.html" className="img-2">
          <img
            src="/images/xblog-2.jpg.pagespeed.ic.FLfkdf20vk.webp"
            className="img-fluid"
            alt="Colorlib Template"
          />
        </a>
        <div className="text pt-3">
          <p className="meta d-flex">
            <span className="pr-3">Dessert</span>
            <span className="ml-auto pl-3">March 01, 2018</span>
          </p>
          <h3>
            <a href="##">Tasty &amp; Delicious Foods</a>
          </h3>
          <p className="mb-0">
            <a href="single.html" className="btn btn-black py-2">
              Read More <span className="icon-arrow_forward ml-4" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
