
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, MapPinIcon, SearchIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-blue-900/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80')"
        }}
      ></div>
      
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Find Your
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 block">
            Perfect Ride
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Discover premium cars for every journey. From city cruisers to luxury vehicles, 
          we have the perfect car waiting for you.
        </p>
        
        {/* Search Card */}
        <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                Pickup Location
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="airport">Airport</SelectItem>
                  <SelectItem value="northside">North Side</SelectItem>
                  <SelectItem value="southside">South Side</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Pickup Date
              </label>
              <Input type="date" className="w-full" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                Return Date
              </label>
              <Input type="date" className="w-full" />
            </div>
            
            <div className="flex items-end">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105">
                <SearchIcon className="h-5 w-5 mr-2" />
                Search Cars
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
