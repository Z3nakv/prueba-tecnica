export const SkeletonCard: React.FC = () => {
  return (
    <div className="container mx-auto p-6 sm:p-8 md:p-10">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Ventas Recientes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, index) => (
          <div className="bg-gray-200 rounded-lg shadow-lg p-6 animate-pulse" key={index}>
            <div className="w-full h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-1/2 h-6 bg-gray-300 rounded mb-4"></div>
            <div className="w-full h-10 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
