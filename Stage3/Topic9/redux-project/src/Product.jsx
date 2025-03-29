import React, { useEffect } from 'react';
// import { getProductData } from './services/product';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductDataAction,
  // setError,
  // setLoading,
  // setProducts,
} from './store/slice/productSlice';
import Pricing from './components/Pricing';
import Badge from './uikit/Badge';

function Product() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => ({
    products: state.productData.products,
    loading: state.productData.loading,
    error: state.productData.error,
  }));

  console.log(products);

  useEffect(() => {
    dispatch(getProductDataAction());
  }, []);

  // useEffect(() => {
  //   dispatch(setLoading(true));
  //   getProductData()
  //     .then((data) => {
  //       console.log(data);
  //       dispatch(setProducts(data));
  //     })
  //     .catch((error) => {
  //       console;
  //       dispatch(setError(error));
  //     })
  //     .finally(() => {
  //       dispatch(setLoading(false));
  //     });
  // }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Product
      <Badge content="Message" color="amber" size="lg" />
      <button className=" rounded-[6px] text-[46px]">Test </button>
      <Pricing />
      {products.map((product) => (
        <div key={product.id} className="mt-lg-2 mt-sm-6">
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
