import React from 'react';
import { Card, Typography, Layout, Button } from 'antd';

import { Header } from '../../common/components/Header';
import { useProductStore } from '../../store/product/product.store';

import { useShallow } from 'zustand/react/shallow';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const HomePage = () => {
  const { count, setCount } = useProductStore(
    useShallow((state) => ({
      count: state.count,
      setCount: state.action.setCount,
    }))
  );

  //   const count = useProductStore((state) => state.count);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ maxWidth: 800, margin: '50px auto' }}>
        <Card>
          <Title level={2}>Welcome to Our Website {count}</Title>
          <Paragraph>
            This is a simple home page using Ant Design. Here, you can find
            information about our services, products, and more. Stay tuned for
            updates!
          </Paragraph>
          <Button onClick={() => setCount(10)}>Count set</Button>
        </Card>
      </Content>
    </Layout>
  );
};

export default HomePage;
