import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function ProductDetail() {
  const { sukur_id } = useParams();

  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const [search, setParams] = useSearchParams();

  const imgSize = search.get("img");
  const tab = search.get("tab");

  const changeTab = (tab) => {
    setParams({ img: imgSize, tab });
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${sukur_id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [sukur_id]);

  console.log(data);

  return (
    <div>
      <button onClick={() => changeTab("rait")}>Rait</button>
      <button onClick={() => changeTab("info")}>Info</button>

      {tab == "rait" && <RaitComponent />}
      {tab == "info" && <InfoComponent />}

      <button
        onClick={() => {
          navigate("/product");
        }}
      >
        Back
      </button>
      <img
        width={200}
        height={200}
        src={imgSize == "little" ? data?.thumbnail : data?.images?.[0]}
        alt={data?.title}
      />
      <h1>{data?.title}</h1>
      <div>{data?.price}</div>
      <div>{data?.description}</div>
      <div>{data?.description}</div>
      <div>{data?.description}</div>
      <div>{data?.rating}</div>
      {data?.reviews.map((review, index) => (
        <div key={index}>
          <div>
            {review.reviewerName} {review.rating}
          </div>
          <div>{review.comment}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;

function RaitComponent() {
  return <div style={{ border: "1px solid red" }}>RaitComponent</div>;
}

function InfoComponent() {
  return <div style={{ border: "1px solid red" }}>InfoComponent</div>;
}
