import { Link } from "react-router-dom";
import type { RestaurantProps } from "../../types/restaurant";


const RestaurantCard = ({resName, cuisine, rating, deliveryTime, id}: RestaurantProps) => {
    return (
        <div className="card shadow-sm h-100 restaurant-card">
            <div className="card-body">
                <h6 className='card-title'>{resName}</h6>
                <p>{cuisine}</p>
                <p>{rating} stars</p>
                <p>{deliveryTime} minutes</p>
                <Link to={`restaurant/${id}`} className="btn btn-info btn-sm">View</Link>
            </div>
        </div>
    );
}

export default RestaurantCard;