import React from "react";
import { useGlobalContext } from "../provider/global/GlobalProvider";
import Header from "../components/Header";

function Basket() {
  const { basket } = useGlobalContext();

  return (
    <div>
      <Header />
      <h2>Basket</h2>
      {basket.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Basket;
