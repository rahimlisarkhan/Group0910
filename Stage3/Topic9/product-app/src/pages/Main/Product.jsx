import React from 'react';
import { Card, Typography, Layout, Row, Col, Button } from 'antd';
import { Header } from '../../common/components/Header';
import { useProductStore } from '../../store/product/product.store';

import { useShallow } from 'zustand/react/shallow';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

// const products = [
//   {
//     img_url: 'https://via.placeholder.com/150',
//     title: 'Product 1',
//     desc: 'This is a description of Product 1.',
//     price: '$10.00',
//   },
//   {
//     img_url: 'https://via.placeholder.com/150',
//     title: 'Product 2',
//     desc: 'This is a description of Product 2.',
//     price: '$15.00',
//   },
//   {
//     img_url: 'https://via.placeholder.com/150',
//     title: 'Product 3',
//     desc: 'This is a description of Product 3.',
//     price: '$20.00',
//   },
// ];

const ProductPage = () => {
  const navigate = useNavigate();

  const { count, getAll, products } = useProductStore(
    useShallow((state) => ({
      count: state.count,
      products: state.products,
      getAll: state.action.getAllProduct,
    }))
  );

  useEffect(() => {
    if (products.length === 0) {
      getAll();
    }
  }, [getAll, products]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ maxWidth: 800, margin: '50px auto' }}>
        <Title level={2}>Our Products {count}</Title>
        <Row gutter={[16, 16]}>
          {products.map((product, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.img_url} />}
              >
                <Title level={4}>{product.title}</Title>
                <Paragraph>{product.body}</Paragraph>
                <Title level={5}>{product.price || 0}</Title>
                <Button
                  onClick={() =>
                    navigate(
                      `/process?product_id=${product.id}&product_index=${index}`
                    )
                  }
                >
                  Edit
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default ProductPage;
