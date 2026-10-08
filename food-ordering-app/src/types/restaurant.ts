export interface MenuItem {
    id: number,
    restaurantId: number,
    category: string,
    name: string,
    description: string,
    price: number,
    image: string,
    isVeg: boolean,
    isAvailable: boolean,
    isPopular: boolean,
    rating: number
}

export interface MenuCategory {
    id: number,
    name: string,
    items: MenuItem[]
}
export interface Restaurant {
    id: string,
    name: string,
    image: string,
    cuisines: string[],
    rating: number,
    deliveryTime: number,
    location: string,
    city: string,
    isPureVeg: boolean,
    isOpen: boolean,
    offer: string,
    promoted: boolean,
    menuCategories: MenuCategory[]
}

export interface RestaurantProps {
    id: string,
    resName?: string;
    cuisine?: string;
    rating?: number;
    deliveryTime?: number;
    image?: string
}