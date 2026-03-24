import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 bg-dark-bg/80 backdrop-blur-md flex justify-center items-center z-[100] p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border p-8 rounded-3xl w-full max-w-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto"
          >
             <button
                onClick={onClose}
                className="absolute text-gray-600 dark:text-gray-300 top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                ✕
              </button>
             
            <div className="md:w-1/2 flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl shrink-0">
              <img src={product.image} className="max-h-64 object-contain mix-blend-multiply dark:mix-blend-normal" />
            </div>
            
            <div className="md:w-1/2 flex flex-col">
              <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">
                {product.category || 'Category'}
              </span>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">{product.title}</h2>
              <div className="flex-1">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed bg-gray-50 dark:bg-dark-bg p-4 rounded-xl border border-gray-100 dark:border-dark-border">
                  {product.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-dark-border">
                <div>
                   <p className="text-sm text-gray-500">Price</p>
                   <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600">
                     ₹{product.price}
                   </p>
                </div>
                <button
                  className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;