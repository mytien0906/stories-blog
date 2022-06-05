import React from 'react';
import Layout from '../base/Layout';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FeturePosts from '../components/HomePage/FeturePosts';
import HolidaySeasonsRecipes from '../components/HomePage/HolidaySeasonsRecipes';
import RecentStories from '../components/HomePage/RecentStories';
import Subcribe from '../components/HomePage/Subcribe';
import WatchVideo from '../components/HomePage/WatchVideo';

export default function HomeContainer() {
  return (
    <Layout>
      <Header />
      <Carousel />
      <RecentStories/>
      <FeturePosts/>
      <WatchVideo/>
      <HolidaySeasonsRecipes/>
      <Subcribe/>
      <Footer/>
    </Layout>
  );
}
