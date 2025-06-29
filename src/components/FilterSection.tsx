
import { Button } from "@/components/ui/button";
import { Car, Zap, Shield, Crown } from "lucide-react";

interface FilterSectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterSection = ({ selectedCategory, onCategoryChange }: FilterSectionProps) => {
  const categories = [
    {
      id: "all",
      name: "All Cars",
      icon: Car,
      color: "from-gray-500 to-gray-600"
    },
    {
      id: "economy",
      name: "Economy",
      icon: Car,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "luxury",
      name: "Luxury",
      icon: Crown,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "suv",
      name: "SUV",
      icon: Shield,
      color: "from-orange-500 to-red-600"
    },
    {
      id: "electric",
      name: "Electric",
      icon: Zap,
      color: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Choose Your Category
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <Button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                variant="outline"
                className={`h-24 flex flex-col items-center justify-center space-y-2 transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg` 
                    : 'hover:shadow-md bg-white'
                }`}
              >
                <Icon className={`h-6 w-6 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                  {category.name}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
