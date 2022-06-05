import React from 'react';
import Layout from '../base/Layout';
import BreadCrumb from '../components/BreadCrumb';
import DetailPost from '../components/DetailPost';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Subcribe from '../components/HomePage/Subcribe';

type Props = {
  id: string | string[] | undefined;
};

export default function DetailPostContainer(props: Props) {
  return (
    <Layout>
      <Header />
      <BreadCrumb />
      <DetailPost/>
      <Subcribe/>
      <Footer />
    </Layout>
  );
}
