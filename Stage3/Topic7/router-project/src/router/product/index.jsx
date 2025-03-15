import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Product() {
  const [data, setData] = useState([]);

  const [search] = useSearchParams();

  const category = search.get("category");
  const price = search.get("price");
  const raiting = search.get("raiting");

  const navigate = useNavigate();

  const filterData = useMemo(() => {
    if (data.length) {
      if (category) {
        return data.filter((product) => product.category === category);
      }

      if (price) {
        return data.filter((product) => product.price <= price);
      }

      if (raiting) {
        return data.filter((product) => product.rating >= raiting);
      }

      return data;
    }
  }, [category, data, price, raiting]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setData(data.products))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  console.log(filterData);

  return (
    <div>
      <h1>Product</h1>

      {filterData?.map((product, index) => (
        <div
          key={index}
          style={{ border: "1px solid red", margin: "10px", padding: "10px" }}
        >
          <div>{product.title}</div>
          <div>{product.price}</div>
          <button onClick={() => navigate(`/product/${product.id}?img=little`)}>
            Click
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product;
