
import CarCard from "./CarCard";
import { carData } from "@/data/carData";

interface FeaturedCarsProps {
  selectedCategory: string;
}

const FeaturedCars = ({ selectedCategory }: FeaturedCarsProps) => {
  const filteredCars = selectedCategory === "all" 
    ? carData 
    : carData.filter(car => car.category === selectedCategory);

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          {selectedCategory === "all" ? "Featured Vehicles" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Cars`}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No cars found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCars;
