
import Header from "@/components/Header";
import FeaturedCars from "@/components/FeaturedCars";
import FilterSection from "@/components/FilterSection";
import { useState } from "react";

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Fleet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse collection of premium vehicles. From compact cars for city adventures to luxury SUVs for family trips.
          </p>
        </div>
      </div>

      <FilterSection 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <FeaturedCars selectedCategory={selectedCategory} />
    </div>
  );
};

export default Fleet;
