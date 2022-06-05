/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import RecentPostItem from './RecentPostItem';

export default function RecentPostList() {
  return (
    <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
      <h3 className="heading mb-4">Recent Blog</h3>
      <RecentPostItem />
      <RecentPostItem />
      <RecentPostItem />
    </div>
  );
}
