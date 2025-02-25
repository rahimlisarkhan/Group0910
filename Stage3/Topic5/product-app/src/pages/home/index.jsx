import { useEffect, useState } from 'react';
import { ProductCard } from '../../common/components/ProductCard';
import {
  addProductData,
  getProductData,
  rmvProductData,
  uptProductData,
} from '../../services/product';
import { Button, Flex, Spin } from 'antd';
import ProductModal from '../../common/components/ProductModal';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    initData();
  }, []);

  async function initData() {
    const resdata = await getProductData();
    setData(resdata);
    setLoading(false);
  }

  async function handleSaveData(form) {
    if (currentProduct) {
      const resData = await uptProductData(currentProduct.id, form);

      const newData = [...data];

      const currentIndex = newData.findIndex(
        (item) => item.id == currentProduct.id
      );

      newData[currentIndex] = resData;
      setData(newData);
    } else {
      const resData = await addProductData(form);
      setData((prev) => [resData, ...prev]);
    }

    setShowModal(false);
  }

  async function handleRemoveData(id) {
    await rmvProductData(id);
    let newPosts = data.filter((product) => product.id !== id);
    setData(newPosts);
  }

  function handleEditData(product) {
    setCurrentProduct(product);
    setShowModal(true);
  }

  const filterData = data.filter((item) => item.id > 95).reverse();

  if (loading) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setCurrentProduct(null);
          setShowModal(true);
        }}
      >
        Create +
      </Button>
      <Flex gap={24} wrap>
        <ProductModal
          open={showModal}
          currentProduct={currentProduct}
          onClose={() => setShowModal(false)}
          onData={handleSaveData}
        />
        {filterData.map((item) => (
          <ProductCard
            key={'product' + item.id}
            img_url={item.img_url}
            title={item.title}
            description={item.description}
            price={item.price}
            onEdit={() => handleEditData(item)}
            onRemove={() => handleRemoveData(item.id)}
          />
        ))}
      </Flex>
    </>
  );
};

export default HomePage;
