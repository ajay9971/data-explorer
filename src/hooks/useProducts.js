import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // cache for 5 min
  });
};

export default useProducts;