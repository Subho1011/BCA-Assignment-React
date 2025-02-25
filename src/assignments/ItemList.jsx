import React from "react";

const ItemList = ({ fruits }) => {
  return (
    <div className="bg-pink-500 py-5 px-12 text-center mb-2">
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>- {fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
