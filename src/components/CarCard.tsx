
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FuelIcon, UsersIcon, SettingsIcon, StarIcon } from "lucide-react";
import BookingModal from "./BookingModal";

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  features: {
    passengers: number;
    transmission: string;
    fuel: string;
  };
}

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          {car.category}
        </Badge>
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{car.rating}</span>
          <span className="text-xs text-gray-500">({car.reviews})</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{car.name}</h3>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <UsersIcon className="h-4 w-4" />
              <span>{car.features.passengers}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SettingsIcon className="h-4 w-4" />
              <span>{car.features.transmission}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FuelIcon className="h-4 w-4" />
              <span>{car.features.fuel}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-800">${car.price}</span>
            <span className="text-gray-600">/day</span>
          </div>
          <BookingModal carName={car.name}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105">
              Book Now
            </Button>
          </BookingModal>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
