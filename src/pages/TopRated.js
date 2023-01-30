import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const { state: { products, loading, errors } } = useProducts()
  console.log(products);
  let content;
  if (loading) {
    content = <p>Loading</p>
  }
  if (errors) {
    content = <p>something went wrong</p>
  }
  if (!loading && !errors && products.length === 0) {
    content = <p>Product list is empty</p>
  }
  if (!loading && !errors && products.length) {
    content = products.filter(product => product.rating >= 4).map((product) => <ProductCard product={product}></ProductCard>)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};
export default TopRated;
