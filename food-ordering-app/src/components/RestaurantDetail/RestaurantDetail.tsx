import { useParams } from "react-router-dom";

const RestaurantDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>Restaurant Details</h2>
            <p>Restaurant id: {id}</p>
        </div>
    );
}

export default RestaurantDetail;