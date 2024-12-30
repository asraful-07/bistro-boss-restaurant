import React from "react";
import Banner from "../../components/Banner";
import Category from "../Category/Category";
import BisteoBoss from "../../components/BisteoBoss";
import Featured from "../../components/Featured";
import { Helmet } from "react-helmet-async";
import MenuSection from "../../components/MenuSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu Page</title>
        <meta
          name="description"
          content="This is the menu page of the application."
        />
      </Helmet>
      <Banner />
      <Category />
      <BisteoBoss />
      <MenuSection />
      <Featured />
    </div>
  );
};

export default Home;
