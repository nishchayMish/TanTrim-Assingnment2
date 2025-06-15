"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LuUpload } from "react-icons/lu";
import Card from './Card';

interface FakeStoreApiData {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

const Products = () => {
  const [data, setData] = useState<FakeStoreApiData[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setData(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white px-4 py-6 sm:px-10">
      <div className="flex justify-between items-center text-gray-300 mb-6">
        <p>Bags • Backpacks</p>
        <p className="flex items-center gap-2">
          {data.length} products <LuUpload />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
