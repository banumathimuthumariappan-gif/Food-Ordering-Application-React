import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurantsList from "../../utils/mockData.ts";
import { useState } from "react";

const Body = () => {
  const [showTowRated, setShowTopRated] = useState(false);

  const filteredRestaurants = showTowRated
    ? restaurantsList.filter((restaurant) => restaurant.rating >= 4.3)
    : restaurantsList;

  return (
    <main className="container-fluid">
      <div className="row mt-2">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            onClick={() => setShowTopRated(!showTowRated)}
          >
            {showTowRated
              ? "Show All Restaurants"
              : "Show Top Rated Restaurants"}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">Search Component</div>
      </div>
      <div className="row mt-5 g-4">
        {filteredRestaurants.map((restaurant) => (
          <div className="col-md-3" key={restaurant.id}>
            <RestaurantCard
              resName={restaurant.name}
              cuisine={restaurant.cuisines.join(", ")}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              image={restaurant.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Body;
