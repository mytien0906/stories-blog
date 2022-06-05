/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export default function RecentPostItem() {
  return (
    <div className="block-21 mb-4 d-flex">
      <a
        className="blog-img mr-4"
        style={{
          backgroundImage: 'url(/images/ximage_2.jpg.pagespeed.ic.OXlNmsE0MY.webp)',
        }}
      />
      <div className="text">
        <h3>
          <a href="##">Even the all-powerful Pointing has no control about the blind texts</a>
        </h3>
        <div className="meta">
          <div>
            <a href="##">
              <span className="icon-calendar" /> February 12, 2019
            </a>
          </div>
          <div>
            <a href="##">
              <span className="icon-person" /> Admin
            </a>
          </div>
          <div>
            <a href="##">
              <span className="icon-chat" /> 19
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
