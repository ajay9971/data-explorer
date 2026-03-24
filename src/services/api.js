import axios from "axios";


const BASE_URL = "https://fakestoreapi.com";

console.log(BASE_URL);

// Fetch all products

export const fetchProducts = async()=>{
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
};


// Fetch categories
export const fetchCategories = async () => {
  const res = await axios.get(`${BASE_URL}/products/categories`);
  return res.data;
};