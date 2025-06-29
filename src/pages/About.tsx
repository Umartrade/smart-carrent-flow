
import Header from "@/components/Header";
import { Car, Shield, Clock, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Our carefully curated fleet features the latest models from top automotive brands, ensuring comfort and reliability."
    },
    {
      icon: Shield,
      title: "Full Insurance",
      description: "Every rental comes with comprehensive insurance coverage, giving you peace of mind on every journey."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist you with any questions or concerns."
    },
    {
      icon: Award,
      title: "Best Service",
      description: "Award-winning customer service with thousands of satisfied customers and excellent reviews."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Carent
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Your trusted partner in car rental services. We've been providing exceptional rental experiences for over a decade, connecting travelers with the perfect vehicle for their journey.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Carent?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Carent, we believe that every journey should be comfortable, safe, and memorable. 
            Our mission is to provide exceptional car rental services that exceed your expectations, 
            whether you're planning a weekend getaway, a business trip, or need a reliable vehicle 
            for your daily commute. We're committed to maintaining the highest standards of service 
            and ensuring that every customer feels valued and supported throughout their rental experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
