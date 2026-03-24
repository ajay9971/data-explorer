const Skeleton = () => {
  return (
    <div className="flex flex-col h-full animate-pulse flex-1 bg-white dark:bg-dark-card p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border">
      <div className="h-64 w-full bg-gray-200 dark:bg-gray-800 rounded-xl mb-4"></div>
      
      <div className="flex flex-col flex-1">
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-md w-1/3 mb-3"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded-md w-full mb-2"></div>
        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded-md w-3/4 mb-auto"></div>
        
        <div className="mt-4 pt-4 flex flex-col gap-3 border-t border-transparent">
          <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-md w-1/4"></div>
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;