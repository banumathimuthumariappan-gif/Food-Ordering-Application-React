import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Restaurant } from "../../types/restaurant";

const RestaurantDetail = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/restaurants/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setRestaurant(data);
      });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between mt-2">
        <h2>{restaurant?.name}</h2>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
      <div className="card shadow-md h-100 mt-5">
        <div className="card-body">
          <p className="text-muted">{restaurant?.cuisines.join(", ")}</p>
          <div className="d-flex gap-5">
            <span>Rating: {restaurant?.rating} stars</span>
            <span>Delivery Time: {restaurant?.deliveryTime} minutes</span>
            <span>
              Location: {restaurant?.location}, {restaurant?.city}
            </span>
          </div>
          <div className="mt-3 d-flex gap-5">
            <span>[ {restaurant?.isOpen ? "Open" : "Closed"} ]</span>
            <span>
              [ {restaurant?.promoted ? "Promoted" : "Not Promoted"} ]
            </span>
          </div>
          <p className="mt-3 fw-bold">OFFER: {restaurant?.offer}</p>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <h3>Menu</h3>
        {restaurant?.menuCategories.map((category) => (
          <div key={category.id} className="card bg-body-secondary p-3 my-3">
            <div
              className="card-header d-flex justify-content-between align-items-center"
              role="button"
              onClick={() =>
                setOpenCategory(
                  openCategory === category.id ? null : category.id,
                )
              }
            >
              <h5 className="fw-bold">{category.name}</h5>
              <span>{openCategory === category.id ? "-" : "+"}</span>
            </div>
            {openCategory === category.id && (
              <div className="card-body">
                {category.items.map((item) => (
                  <div>
                    <p className="fw-bold">{item.name}</p>
                    <p>Price: {item.price}</p>
                    <p className="text-muted">{item.description}</p>
                    <p>Rating: {item.rating}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
