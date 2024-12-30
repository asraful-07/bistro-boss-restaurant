import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Home/Shared/Cover";
import pp from "../../assets/images/menu/dessert-bg.jpeg";
import MenuSection from "../../components/MenuSection";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu Page</title>
        <meta
          name="description"
          content="This is the menu page of the application."
        />
      </Helmet>
      <Cover img={pp} />
      <MenuSection />
      <Cover img={pp} />
      <MenuSection />
      <Cover img={pp} />
      <MenuSection />
    </div>
  );
};

export default Menu;
