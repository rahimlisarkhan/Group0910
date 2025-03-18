import Header from "../components/Header";
import useInitApp from "../hooks/useInitApp";
import { useGlobalContext } from "../provider/global/GlobalProvider";

import { useEffect } from "react";

function Home() {
  const { user, products, dispatch, basket } = useGlobalContext();

  console.log("basket", basket);

  const { loading } = useInitApp();

  useEffect(() => {
    if (user) return;

    const userData = JSON.parse(localStorage.getItem("user"));
    // setUser(userData);
    dispatch({ type: "SET_USER", payload: userData });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "SET_PRODUCTS", payload: data.products })
      )
      .catch((error) => console.log(error));
  }, []);

  console.log("user", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <h2>Home</h2>
      <h3>{user ? `Welcome ${user.name}` : "Welcome Guest"}</h3>

      <div>
        <h3>Products</h3>
        <ul>
          {products.map((product) => {
            const isHasBasket = basket.find((item) => item.id === product.id);

            return (
              <div>
                <li key={product.id}>{product.title}</li>
                <button
                  onClick={() => {
                    dispatch({ type: "ADD_TO_BASKET", payload: product });
                  }}
                >
                  {!isHasBasket ? "+ Add Basket" : " - Remove Basket"}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
