import { useState } from "react";
import { motion } from "framer-motion";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Skeleton from "../components/Skeleton";
import ProductModal from "../components/ProductModal";

const Home = () => {
  const { data = [], isLoading, isError } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  let filtered = data
    .filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category ? item.category === category : true
    );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto min-h-full flex flex-col">
      <div className="mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400"
        >
          Discover Products
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 font-medium"
        >
          Explore our wide range of premium products tailored for you.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card mb-8 p-4 rounded-3xl flex flex-col xl:flex-row gap-4 xl:items-center z-20 sticky top-24 shadow-lg shadow-gray-200/20 dark:shadow-none"
      >
        <SearchBar setSearch={setSearch} />
        <div className="xl:w-px xl:h-12 w-full h-px bg-gray-200 dark:bg-dark-border hidden xl:block"></div>
        <div className="flex flex-col md:flex-row gap-4 xl:w-auto w-full">
           <CategoryFilter setCategory={setCategory} />
           <div className="relative shrink-0 w-full md:w-auto">
             <select
               className="w-full pl-6 pr-10 py-3.5 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border text-gray-900 dark:text-gray-100 rounded-2xl appearance-none focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm hover:shadow-md cursor-pointer md:min-w-[180px] font-medium"
               onChange={(e) => setSort(e.target.value)}
             >
               <option value="">Sort By</option>
               <option value="low">Price: Low to High</option>
               <option value="high">Price: High to Low</option>
             </select>
             <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
               <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
             </div>
           </div>
        </div>
      </motion.div>

      {isError && (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-red-500 font-semibold bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 px-8 py-5 rounded-3xl shadow-sm">
            Error loading data. Please try again.
          </p>
        </div>
      )}

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && !isError && filtered.length === 0 && (
         <div className="flex-1 flex flex-col items-center justify-center text-center opacity-70 mt-10">
            <div className="text-6xl mb-6 grayscale opacity-80">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">No products found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">Try adjusting your search or filters to find what you're looking for.</p>
         </div>
      )}

      {!isLoading && !isError && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Home;