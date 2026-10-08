const RestaurantCardShimmer = () => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">
                {/* Restaurant Name */}
                <h6 className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                </h6>
                {/* Cuisine */}
                <p className="placeholder-glow">
                    <span className="placeholder col-10"></span>
                </p>
                {/* Rating */}
                <p className="placeholder-glow">
                    <span className="placeholder col-5"></span>
                </p>
                {/* Delivery Time */}
                <p className="placeholder-glow">
                    <span className="placeholder col-6"></span>
                </p>
            </div>
        </div>
    );
}

export default RestaurantCardShimmer;