import React from "react";
import { motion } from "framer-motion";

const ProductCard = React.memo(({ product, onClick }) => {
  return (
    <div
      className="group relative cursor-pointer flex flex-col h-full bg-white dark:bg-dark-card rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 border border-gray-100 dark:border-dark-border"
      onClick={() => onClick(product)}
    >
      <div className="h-64 w-full overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800 p-4 mb-4 flex items-center justify-center mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider truncate mr-2">
            {product.category || 'Category'}
          </p>
          <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10 px-2 py-0.5 rounded text-xs font-bold border border-yellow-200 dark:border-yellow-500/20 shrink-0">
            ★ {product.rating?.rate || '4.0'}
          </span>
        </div>
        <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white line-clamp-2 leading-snug mb-1">
          {product.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto pt-4 flex flex-col gap-3">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{product.price}
          </p>
          <button className="w-full bg-gray-900 dark:bg-primary-600 hover:bg-gray-800 dark:hover:bg-primary-500 text-white font-semibold py-2.5 rounded-xl transition-colors shadow-md text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;