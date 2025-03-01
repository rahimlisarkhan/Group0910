import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ProductCard } from "../../common/components/ProductCard";
import {
  addProductData,
  getProductData,
  rmvProductData,
  uptProductData,
} from "../../services/product";
import { Alert, Button, Flex, Spin } from "antd";
import ProductModal from "../../common/components/ProductModal";
import { useDocumentTitle } from "../../common/hooks/useDocumentTitle";
import { useBoolean } from "../../common/hooks/useBoolean";
import { useNetwork } from "../../common/hooks/useNetwork";

const list = ["list1", "list2", "list3"];

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);

  useDocumentTitle(currentProduct ? currentProduct.title : `Product App`);

  const online = useNetwork();

  // const myValue = useRef(0);

  // let timeout = useRef(null);
  // let timeout = null;

  // const id = Date.now()

  // const [showModal, setShowModal] = useState(false);

  const productModal = useBoolean();

  console.log("productModal", productModal.value);

  // console.log("myValue", myValue);

  useEffect(() => {
    initData();

    // timeout = setTimeout(() => {
    //   console.log("timeout");
    // }, 1000);

    // clearTimeout(timeout);
  }, []);

  async function initData() {
    const resdata = await getProductData();
    setData(resdata);
    setLoading(false);
    // myValue.current = resdata.length;
  }

  const handleSaveData = async (form) => {
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

    // setShowModal(false);
    productModal.setFalse();
  };

  const handleRemoveData = useCallback(
    async (id) => {
      await rmvProductData(id);
      let newPosts = data.filter((product) => product.id !== id);
      setData(newPosts);
    },
    [data]
  );

  const handleEditData = useCallback(
    (product) => {
      setCurrentProduct(product);
      // setShowModal(true);
      productModal.setTrue();
    },
    [productModal]
  );

  const filterData = useMemo(() => {
    return data.filter((item) => item.id > 95).reverse();
  }, [data]);

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          // setShowModal(true);
          productModal.setTrue();
        }}
      >
        {/* Create + {myValue.current} */}
        Create +
      </Button>
      <Alert
        type={online ? "success" : "error"}
        message={online ? "Online" : "Offline"}
      />
      <br />
      <Flex gap={24} wrap>
        <ProductModal
          open={productModal.value}
          currentProduct={currentProduct}
          onClose={productModal.setFalse}
          onData={handleSaveData}
        />
        {filterData.map((item) => (
          <ProductCard
            key={"product" + item.id}
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
