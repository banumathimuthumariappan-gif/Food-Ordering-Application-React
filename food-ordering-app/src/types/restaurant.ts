export interface Restaurant {
    id: string,
    name: string,
    image: string,
    cuisines: string[],
    rating: number,
    deliveryTime: number
}

export interface RestaurantProps {
    id: string,
    resName?: string;
    cuisine?: string;
    rating?: number;
    deliveryTime?: number;
    image?: string
}