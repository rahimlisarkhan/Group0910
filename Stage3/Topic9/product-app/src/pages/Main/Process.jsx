import React from 'react';
import { Typography, Layout, Form, Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Header } from '../../common/components/Header';

import { useSearchParams } from 'react-router-dom';
import { useProductStore } from '../../store/product/product.store';

import { useShallow } from 'zustand/react/shallow';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const { Title } = Typography;
const { Content } = Layout;

const ProcessPage = () => {
  const [search] = useSearchParams();

  const navigate = useNavigate();

  const productId = search.get('product_id');
  const productIndex = search.get('product_index');

  const { createProduct, product, getOneProduct, loading, updateProduct } =
    useProductStore(
      useShallow((state) => ({
        count: state.count,
        product: state.product,
        getOneProduct: state.action.getOneProduct,
        loading: state.loading,
        createProduct: state.action.createProduct,
        updateProduct: state.action.updateProduct,
      }))
    );

  const formik = useFormik({
    initialValues: {
      img_url: '',
      title: '',
      desc: '',
      price: '',
    },
    validationSchema: Yup.object({
      img_url: Yup.string().url('Invalid URL').required('Required'),
      title: Yup.string().required('Required'),
      desc: Yup.string().required('Required'),
      price: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Product Data:', values);

      if (productId) {
        updateProduct(productId, values);
      } else {
        createProduct(values);
      }
      navigate('/products');
    },
  });

  useEffect(() => {
    if (productId) {
      getOneProduct(productId);
    }
  }, [productId, getOneProduct]);

  useEffect(() => {
    if (product) {
      formik.setValues({
        img_url: product.img_url,
        title: product.title,
        desc: product.desc,
        price: product.price,
      });
    }
  }, [product]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ maxWidth: 800, margin: '50px auto' }}>
        <Title level={2}>{productId ? 'Edit' : 'Create'} Product</Title>
        {productIndex && (
          <Title level={3}>
            {productIndex % 2 == 0 ? 'Even' : 'Odd'} Product
          </Title>
        )}
        <Form onFinish={formik.handleSubmit} layout="vertical">
          <Form.Item
            label="Image URL"
            validateStatus={
              formik.errors.img_url && formik.touched.img_url ? 'error' : ''
            }
            help={formik.errors.img_url}
          >
            <Input
              name="img_url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.img_url}
            />
          </Form.Item>
          <Form.Item
            label="Title"
            validateStatus={
              formik.errors.title && formik.touched.title ? 'error' : ''
            }
            help={formik.errors.title}
          >
            <Input
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
          </Form.Item>
          <Form.Item
            label="Description"
            validateStatus={
              formik.errors.desc && formik.touched.desc ? 'error' : ''
            }
            help={formik.errors.desc}
          >
            <Input.TextArea
              name="desc"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
            />
          </Form.Item>
          <Form.Item
            label="Price"
            validateStatus={
              formik.errors.price && formik.touched.price ? 'error' : ''
            }
            help={formik.errors.price}
          >
            <Input
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {productId ? 'Update' : 'Create'}
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};

export default ProcessPage;
