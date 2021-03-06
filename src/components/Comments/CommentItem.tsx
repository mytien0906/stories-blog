/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function CommentItem() {
  return (
    <li className="comment">
      <div className="vcard bio">
        <img src="/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp" alt="Image placeholder" />
      </div>
      <div className="comment-body">
        <h3>John Doe</h3>
        <div className="meta">October 03, 2018 at 2:21pm</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum
          necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste
          iure! Quam voluptas earum impedit necessitatibus, nihil?
        </p>
        <p>
          <a href="##" className="reply">
            Reply
          </a>
        </p>
      </div>
    </li>
  );
}
