import React, { useEffect, useState } from "react";
import axios from "axios";
import { SaleCard } from "./components/Sales";
import { Sale } from "./types";
import { SkeletonCard } from "./skeleton/skeletonCard";

const Sales: React.FC = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<Sale[]>("https://server-pps70ksu9-adrians-projects-8581db70.vercel.app")
      .then(response => {
        setSales(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error al cargar las ventas");
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <SkeletonCard />;

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6 sm:p-8 md:p-10">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Ventas Recientes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {sales.map((sale) => (
        <SaleCard key={sale.id} sale={sale} />
      ))}
      </div>
    </div>
  );
};

export default Sales;
