import RestaurantCard from "../RestaurantCard/RestaurantCard";

import restaurant01 from "../../assets/restaurant-01.jpg";
import restaurant02 from "../../assets/restaurant-02.jpeg";
import restaurant03 from "../../assets/restaurant-03.jpeg";
import restaurant04 from "../../assets/restaurant-04.jpeg";
import restaurant05 from "../../assets/restaurant-05.png";
import restaurant06 from "../../assets/restaurant-06.png";
import restaurant07 from "../../assets/restaurant-07.png";
import restaurant08 from "../../assets/restaurant-08.png";
import restaurant09 from "../../assets/restaurant-09.png";
import restaurant10 from "../../assets/restaurant-10.jpeg";

const Body = () => {
  const restaurants = [
    {
      id: 1,
      name: "Meghna Foods",
      image: restaurant01,
      cuisines: ["Biryani", "Chinese", "North Indian"],
      rating: 4.3,
      ratingCount: 2847,
      deliveryTime: 38,
      priceForTwo: 500,
      costForTwo: "₹500 for two",
      location: "Koramangala",
      city: "Bangalore",
      distance: 2.4,
      isPureVeg: false,
      isOpen: true,
      offer: "20% OFF up to ₹100",
      promoted: true,
    },
    {
      id: 2,
      name: "KFC",
      image: restaurant02,
      cuisines: ["Burgers", "Fast Food", "Chicken"],
      rating: 4.2,
      ratingCount: 5632,
      deliveryTime: 25,
      priceForTwo: 450,
      costForTwo: "₹450 for two",
      location: "HSR Layout",
      city: "Bangalore",
      distance: 1.8,
      isPureVeg: false,
      isOpen: true,
      offer: "Flat ₹75 OFF",
      promoted: false,
    },
    {
      id: 3,
      name: "Empire Restaurant",
      image: restaurant03,
      cuisines: ["Biryani", "Chinese", "South Indian"],
      rating: 4.1,
      ratingCount: 3214,
      deliveryTime: 32,
      priceForTwo: 600,
      costForTwo: "₹600 for two",
      location: "Indiranagar",
      city: "Bangalore",
      distance: 3.1,
      isPureVeg: false,
      isOpen: true,
      offer: "10% OFF",
      promoted: false,
    },
    {
      id: 4,
      name: "A2B - Adyar Ananda Bhavan",
      image: restaurant04,
      cuisines: ["South Indian", "North Indian", "Sweets"],
      rating: 4.5,
      ratingCount: 7821,
      deliveryTime: 30,
      priceForTwo: 400,
      costForTwo: "₹400 for two",
      location: "Marathahalli",
      city: "Bangalore",
      distance: 2.7,
      isPureVeg: true,
      isOpen: true,
      offer: "20% OFF up to ₹150",
      promoted: true,
    },
    {
      id: 5,
      name: "Nandhana Palace",
      image: restaurant05,
      cuisines: ["Andhra", "Biryani", "North Indian"],
      rating: 4.2,
      ratingCount: 4126,
      deliveryTime: 35,
      priceForTwo: 550,
      costForTwo: "₹550 for two",
      location: "BTM Layout",
      city: "Bangalore",
      distance: 2.1,
      isPureVeg: false,
      isOpen: true,
      offer: "₹100 OFF above ₹499",
      promoted: false,
    },
    {
      id: 6,
      name: "Burger King",
      image: restaurant06,
      cuisines: ["Burgers", "Fast Food", "Beverages"],
      rating: 4.0,
      ratingCount: 6482,
      deliveryTime: 28,
      priceForTwo: 400,
      costForTwo: "₹400 for two",
      location: "Whitefield",
      city: "Bangalore",
      distance: 4.2,
      isPureVeg: false,
      isOpen: true,
      offer: "Buy 1 Get 1 Free",
      promoted: false,
    },
    {
      id: 7,
      name: "Saravana Bhavan",
      image: restaurant07,
      cuisines: ["South Indian", "Breakfast", "Beverages"],
      rating: 4.4,
      ratingCount: 5234,
      deliveryTime: 24,
      priceForTwo: 350,
      costForTwo: "₹350 for two",
      location: "Electronic City",
      city: "Bangalore",
      distance: 3.5,
      isPureVeg: true,
      isOpen: true,
      offer: "15% OFF",
      promoted: false,
    },
    {
      id: 8,
      name: "Domino's Pizza",
      image: restaurant08,
      cuisines: ["Pizza", "Italian", "Fast Food"],
      rating: 4.3,
      ratingCount: 9234,
      deliveryTime: 35,
      priceForTwo: 500,
      costForTwo: "₹500 for two",
      location: "Bellandur",
      city: "Bangalore",
      distance: 2.9,
      isPureVeg: false,
      isOpen: true,
      offer: "40% OFF up to ₹125",
      promoted: true,
    },
    {
      id: 9,
      name: "Chai Point",
      image: restaurant09,
      cuisines: ["Tea", "Snacks", "Beverages"],
      rating: 4.2,
      ratingCount: 2876,
      deliveryTime: 20,
      priceForTwo: 250,
      costForTwo: "₹250 for two",
      location: "HSR Layout",
      city: "Bangalore",
      distance: 1.5,
      isPureVeg: true,
      isOpen: true,
      offer: "₹50 OFF above ₹199",
      promoted: false,
    },
    {
      id: 10,
      name: "Pizza Hut",
      image: restaurant10,
      cuisines: ["Pizza", "Italian", "Desserts"],
      rating: 4.1,
      ratingCount: 7345,
      deliveryTime: 34,
      priceForTwo: 600,
      costForTwo: "₹600 for two",
      location: "Jayanagar",
      city: "Bangalore",
      distance: 3.8,
      isPureVeg: false,
      isOpen: true,
      offer: "30% OFF",
      promoted: false,
    },
  ];

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-md-12">Search Component</div>
      </div>
      <div className="row mt-5 g-4">
        {restaurants.map((restaurant) => (
          <div className="col-md-3">
            <RestaurantCard
              resName={restaurant.name}
              cuisine={restaurant.cuisines.join(", ")}
              rating={`${restaurant.rating} stars`}
              deliveryTime={`${restaurant.deliveryTime} minutes`}
              image={restaurant.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Body;
