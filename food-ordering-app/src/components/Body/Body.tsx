import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useState } from "react";
import useRestaurants from '../../hooks/useRestaurants.tsx';

const Body = () => {
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchText, setSearchText] = useState("");

  const {restaurants, error} = useRestaurants();

  
  const searchResults = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const filteredRestaurants = showTopRated
    ? searchResults.filter((restaurant) => restaurant.rating >= 4.3)
    : searchResults;

  return error ? (
    <div className="mt-5 alert alert-danger">
      Failed to load Restaurants. Please try again
    </div>
  ) : (
    <main className="container-fluid">
      <div className="row mt-2">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            onClick={() => setShowTopRated(!showTopRated)}
          >
            {showTopRated
              ? "Show All Restaurants"
              : "Show Top Rated Restaurants"}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mt-3">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter to search Restaurant..."
            className="form-control"
            value={searchText}
            onChange={(event) => setSearchText(event?.target.value)}
          />
        </div>
      </div>
      <div className="row mt-5 g-4">
        {filteredRestaurants.map((restaurant) => (
          <div className="col-md-3" key={restaurant.id}>
            <RestaurantCard
              id={restaurant.id}
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
