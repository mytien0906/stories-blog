import React from 'react';
import LargeStory from '../Stories/LargeStory';
import SmallStory from '../Stories/SmallStory';

export default function RecentStories() {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 heading-section ftco-animate">
            <h2 className="mb-4">
              <span>Recent Stories</span>
            </h2>
          </div>
        </div>
        <div className="row">
          <LargeStory />
          <div className="col-md-6">
            <div className="row">
              <SmallStory />
              <SmallStory />
              <SmallStory />
              <SmallStory />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
