import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../services/api";

const CategoryFilter = ({ setCategory }) => {
  const { data = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <div className="relative shrink-0 w-full md:w-auto">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
      </div>
      <select
        className="w-full pl-12 pr-10 py-3.5 bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border border-gray-200 dark:border-dark-border text-gray-900 dark:text-gray-100 rounded-2xl appearance-none focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all shadow-sm hover:shadow-md cursor-pointer md:min-w-[200px]"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {data.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </div>
  );
};

export default CategoryFilter;