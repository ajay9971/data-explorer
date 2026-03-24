import { useEffect, useState } from "react";

const SearchBar = ({ setSearch }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(value);
    }, 400);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="relative flex-1">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      <input
        type="text"
        placeholder="Search for amazing products..."
        className="w-full pl-12 pr-4 py-3.5 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border text-gray-900 dark:text-gray-100 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm hover:shadow-md"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;