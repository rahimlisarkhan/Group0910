import React from 'react';
import { Typography, Layout, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Header: AntHeader } = Layout;

export function Header() {
  const navigate = useNavigate();

  return (
    <AntHeader
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 50px',
        background: '#001529',
      }}
    >
      <Title
        level={3}
        style={{ color: '#fff', margin: 0 }}
        onClick={() => navigate('/')}
      >
        Logo
      </Title>
      <Button onClick={() => navigate('/products')}>Products</Button>
      <Button type="primary" onClick={() => navigate('/process')}>
        Create
      </Button>
    </AntHeader>
  );
}
