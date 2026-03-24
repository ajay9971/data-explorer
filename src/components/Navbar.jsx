import { motion } from "framer-motion";

const Navbar = ({ toggleDark, isDark }) => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 glass px-8 py-5 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
           <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Data Explorer
        </h1>
      </div>

      <button
        onClick={toggleDark}
        className="relative p-2 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
        aria-label="Toggle Dark Mode"
      >
        <span className="text-xl block w-6 h-6 leading-none flex items-center justify-center">
          {isDark ? '☀️' : '🌙'}
        </span>
      </button>
    </motion.nav>
  );
};

export default Navbar;