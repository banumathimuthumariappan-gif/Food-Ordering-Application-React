interface RestaurantProps {
    resName?: string;
    cuisine?: string;
    rating?: number;
    deliveryTime?: number;
    image?: string
}

const RestaurantCard = ({resName, cuisine, rating, deliveryTime, image}: RestaurantProps) => {
    return (
        <div className="card shadow-sm h-100 restaurant-card">
            <div className="card-header p-0">
                <img src={image} alt={resName} className='img-fluid' />
            </div>
            <div className="card-body">
                <h6 className='card-title'>{resName}</h6>
                <p>{cuisine}</p>
                <p>{rating} stars</p>
                <p>{deliveryTime} minutes</p>
            </div>
        </div>
    );
}

export default RestaurantCard;