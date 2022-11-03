import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import AuthProvider from "../../components/AuthProvider";

const Product = () => {
  const [productData, setProductdata] = useState([]);

  async function fetchData() {
    const result = await getProducts();
    setProductdata(result.products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AuthProvider />

      <div className="flex justify-center">
        <div className="w-3/5 j grid gap-4 grid-cols-3 grid-rows-3 ">
          {productData.map((item) => (
            <div className="w-30 border-solid border-2 border-sky-500">
              <img src={item.images[0]} alt="" />
              <div className="text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
