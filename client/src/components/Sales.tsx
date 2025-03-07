import { Sale } from "../types";
import DetailsButton from "./DetailsButton";


export const SaleCard: React.FC<{ sale: Sale }> = ({ sale }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold text-gray-900 truncate">{sale.name}</h3>
        <div className="text-lg font-semibold text-green-600">${sale.amount_total.toFixed(2)}</div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">ID de Orden: {sale.id}</p>
      </div>
      <div className="mt-4">
        <DetailsButton />
      </div>
    </div>
  );