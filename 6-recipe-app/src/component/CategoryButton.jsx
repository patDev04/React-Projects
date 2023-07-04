import React from "react";

const CategoryButton = ({ filteredItems, categories }) => {
  return (
    <>
      {categories?.map((category, idx) => (
        <button key={idx} onClick={() => filteredItems(category)}>
          {category}
        </button>
      ))}
    </>
  );
};

export default CategoryButton;
