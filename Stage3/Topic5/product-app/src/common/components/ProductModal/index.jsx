import { Button, Flex, Input, Modal } from "antd";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useEffect } from "react";

function ProductModal({ open, currentProduct, onClose, onData }) {
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      title: "",
      description: "",
      img_url: "",
      price: "",
    },
    onSubmit: (values, options) => {
      onData(values);
      options.resetForm();
    },
  });

  useEffect(() => {
    setFieldValue("title", currentProduct?.title || "");
    setFieldValue("description", currentProduct?.description || "");
    setFieldValue("price", currentProduct?.price || "");
    setFieldValue("img_url", currentProduct?.img_url || "");
  }, [currentProduct]);

  return (
    <Modal title="Product Modal" open={open} onCancel={onClose} footer={null}>
      <Flex vertical gap={16}>
        <Input
          value={values.title}
          name="title"
          onChange={handleChange}
          placeholder="Title"
        />
        <Input
          value={values.description}
          name="description"
          onChange={handleChange}
          placeholder="Description"
        />
        <Input
          value={values.img_url}
          name="img_url"
          onChange={handleChange}
          placeholder="img_url"
        />
        <Input
          value={values.price}
          name="price"
          onChange={handleChange}
          placeholder="price"
        />

        <Button color="danger" variant="solid" onClick={handleSubmit}>
          Save
        </Button>
      </Flex>
    </Modal>
  );
}

ProductModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onData: PropTypes.func.isRequired,
  currentProduct: PropTypes.shape({
    img_url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default ProductModal;
