import React from "react";
import SectionTitle from "./SectionTitle";

const MenuSection = () => {
  const menuItems = [
    {
      name: "ROAST DUCK BREAST",
      price: "$14.5",
      description:
        "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    },
    {
      name: "ESCALOPE DE VEAU",
      price: "$14.5",
      description:
        "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    },
    {
      name: "FISH PARMENTIER",
      price: "$14.5",
      description:
        "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    },
    {
      name: "TUNA NIÇOISE",
      price: "$14.5",
      description:
        "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    },
    {
      name: "CHICKEN AND WALNUT SALAD",
      price: "$14.5",
      description:
        "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    },
    {
      name: "ROASTED PORK BELLY",
      price: "$14.5",
      description:
        "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <span className="text-[#d99904] font-bold">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-100">
          VIEW FULL MENU
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
