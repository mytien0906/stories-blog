import React from 'react';

export default function CategoryItem() {
  return (
    <li>
      <a
        href="foods.html"
        className="img d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: 'url(images/xcategory-1.jpg.pagespeed.ic.DDYpDO_Yih.webp)',
        }}
      >
        <div className="text">
          <h3>Foods</h3>
        </div>
      </a>
    </li>
  );
}
