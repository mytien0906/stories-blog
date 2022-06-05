/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '../base/Layout';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostItem from '../components/Posts/PostItem';
import AboutMe from '../components/HomePage/AboutMe';

export default function PostsContainer() {
  return (
    <Layout>
      <Header />
      <BreadCrumb />
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      <li>
                        <a href="##">&lt;</a>
                      </li>
                      <li className="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="##">2</a>
                      </li>
                      <li>
                        <a href="##">3</a>
                      </li>
                      <li>
                        <a href="##">4</a>
                      </li>
                      <li>
                        <a href="##">5</a>
                      </li>
                      <li>
                        <a href="##">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <AboutMe/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
