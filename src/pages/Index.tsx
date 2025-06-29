
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import FilterSection from "@/components/FilterSection";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <FilterSection 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <FeaturedCars selectedCategory={selectedCategory} />
    </div>
  );
};

export default Index;
