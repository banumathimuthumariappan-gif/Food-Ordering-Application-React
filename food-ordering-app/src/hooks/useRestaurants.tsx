import { useEffect, useState } from "react";
import type { Restaurant } from "../types/restaurant";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        const data = await response.json();

        setRestaurants(data);
      } catch (error) {
        setError("Unable to fetch restaurants: " + error);
      }
    };
    fetchRestaurants();
  }, []);

  return {
    restaurants,
    error,
  };
};

export default useRestaurants;
