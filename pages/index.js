import React from 'react';

import { client } from '../LIB/client';
import { Product, FooterBanner, HeroBanner} from '../components';

const Home = ({ products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData[1]} />

    <div className="products-heading">
      <h2> Best Selling Products</h2>
      <p>T-Shirts of many Variations</p>
    </div>

    <div className="products-container">
      {products?.map(
        (product) => product.name)}
    </div>

    <FooterBanner />
    </>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
}
}

export default Home;
