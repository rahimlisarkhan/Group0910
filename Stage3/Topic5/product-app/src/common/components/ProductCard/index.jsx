import { Card, Button, Typography, Image } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { useId } from "react";

const { Title, Paragraph } = Typography;

export const ProductCard = ({
  title,
  description,
  price = "0",
  img_url = "https://cdn.shopify.com/s/files/1/0070/7032/articles/product_20research.png?v=1729266020",
  onEdit,
  onRemove,
}) => {
  const checkboxId = useId();

  return (
    <Card
      style={{ width: 300, margin: "20px" }}
      cover={
        <Image
          alt={title}
          height={250}
          style={{ objectFit: "cover" }}
          src={img_url}
        />
      }
      actions={[
        <Button
          key="add-to-cart"
          color="danger"
          variant="solid"
          onClick={onRemove}
          icon={<DeleteOutlined />}
        >
          Remove
        </Button>,
        <Button
          key="add-to-cart"
          variant="solid"
          color="green"
          onClick={onEdit}
          icon={<EditOutlined />}
        >
          Edit
        </Button>,
      ]}
    >
      <Title level={4}>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <Title level={5}>${price}</Title>

      <div>
        <label htmlFor={checkboxId}>Work</label>
        <input id={checkboxId} type="checkbox" />
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
  price: PropTypes.number.isRequired,
};
