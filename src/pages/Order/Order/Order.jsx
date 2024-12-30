import React, { useState } from "react";
import coverImg from "../../../assets/images/shop/banner2.jpg";
import Cover from "../../Home/Shared/Cover";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hook/hooks";
import FoodCard from "../../../components/FoodCard";

const Order = () => {
  // const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  // const { category } = useParams();
  // const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Bistro Boss || Order Page</title>
        <meta
          name="description"
          content="This is the Home page of the application."
        />
      </Helmet>
      <Cover img={coverImg} />
      <div className="my-24">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
              {salad.map((item, index) => (
                <FoodCard key={index} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
              {pizza.map((item, index) => (
                <FoodCard key={index} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
              {soup.map((item, index) => (
                <FoodCard key={index} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
              {desserts.map((item, index) => (
                <FoodCard key={index} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
              {drinks.map((item, index) => (
                <FoodCard key={index} item={item}></FoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
