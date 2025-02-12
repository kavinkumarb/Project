import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bike, Star, Phone, Info } from "lucide-react";

export default function BikeShowroom() {
  const bikes = [
    { name: "Yamaha R15", price: "$3,500", image: "/yamaha.jpg" },
    { name: "Kawasaki Ninja", price: "$5,000", image: "/ninja.jpg" },
    { name: "Ducati Panigale", price: "$15,000", image: "/ducati.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Hero Section */}
      <motion.div className="text-center py-16" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl font-bold">Welcome to Speed Wheels Showroom</h1>
        <p className="text-lg text-gray-400 mt-2">Find Your Dream Bike Today!</p>
        <Button className="mt-4 bg-red-500 hover:bg-red-600">Explore Now</Button>
      </motion.div>

      {/* Featured Bikes */}
      <div className="grid md:grid-cols-3 gap-6 py-10">
        {bikes.map((bike, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800 shadow-lg">
              <img src={bike.image} alt={bike.name} className="w-full h-52 object-cover rounded-t-xl" />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{bike.name}</h2>
                <p className="text-red-400 font-bold">{bike.price}</p>
                <Button className="mt-3 w-full bg-blue-500 hover:bg-blue-600">View Details</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Specifications Section */}
      <div className="py-10 text-center">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <div className="flex justify-center gap-10 mt-6">
          <div className="text-center">
            <Bike size={40} className="text-red-500 mx-auto" />
            <p className="mt-2">Latest Models</p>
          </div>
          <div className="text-center">
            <Star size={40} className="text-yellow-500 mx-auto" />
            <p className="mt-2">Top Quality</p>
          </div>
          <div className="text-center">
            <Phone size={40} className="text-blue-500 mx-auto" />
            <p className="mt-2">24/7 Support</p>
          </div>
        </div>
      </div>

      {/* Contact & About Section */}
      <div className="py-10 bg-gray-800 text-center rounded-xl">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-gray-400">For inquiries, call us at <span className="text-white font-bold">+123-456-7890</span></p>
        <Button className="mt-4 bg-green-500 hover:bg-green-600">Contact Us</Button>
      </div>
    </div>
  );
}
