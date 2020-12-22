import React from "react";
import cardData from "../utils/food.json";

function Cards() {
  return (
    <div className="grid lg:grid-cols-3 gap-10">
      {cardData.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={item.foodPic}
            alt="some food"
            width="500px"
            className="w-full max-h-96 sm:h-32 md:h-86 lg:h-full object-cover"
          />
          <div className="p-2 m-4">
            <span className="text-semibold">{item.name}</span>
            <span className="block text-sm">Recipe by {item.cook}</span>
          </div>
          <div className="deliveryTime">
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
