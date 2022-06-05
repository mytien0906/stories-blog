/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PostItem from '../Posts/PostItem';
import AboutMe from './AboutMe';

export default function FeturePosts() {
  return (
    <section className="ftco-section ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-12 heading-section ftco-animate">
                <h2 className="mb-4">
                  <span>Featured Posts</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <PostItem />
              <PostItem />
              <PostItem />
            </div>
          </div>
          <div className="col-lg-3">
            <AboutMe/>
          </div>
        </div>
      </div>
    </section>
  );
}
