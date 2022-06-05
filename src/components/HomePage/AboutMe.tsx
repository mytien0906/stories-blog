import React from 'react';

export default function AboutMe() {
  return (
    <div className="sidebar-wrap">
      <div className="sidebar-box p-4 about text-center ftco-animate">
        <h2 className="heading mb-4">About Me</h2>
        <img
          src="/images/xauthor.jpg.pagespeed.ic.NYsdCLbW-e.webp"
          className="img-fluid"
          alt="Colorlib Template"
        />
        <div className="text pt-4">
          <p>
            Hi! My name is <strong>Cathy Deon</strong>, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
        </div>
      </div>
      <div className="sidebar-box p-4 ftco-animate">
        <form action="#" className="search-form">
          <div className="form-group">
            <span className="icon icon-search" />
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
      </div>
    </div>
  );
}
