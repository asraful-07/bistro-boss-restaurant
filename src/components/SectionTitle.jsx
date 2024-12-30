import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-8">
      <p className="text-[#d99904] border-y-4 border-gray-300 py-2 mb-4">
        {subHeading}
      </p>
      <h3 className="text-3xl font-bold uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
