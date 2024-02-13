import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);
  if (loading) {
    return <div>Loading... Please Wait!</div>;
  }
  return (
    <>
      <div className="data-container">
        <div className="product-container">
          {products && products.length
            ? products.map((product) => (
                <div className="product" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
          <button disabled={disableButton} onClick={() => setCount(count + 1)}>
            Load More Products
          </button>
          {disableButton ? <p>You have reached the limit</p> : null}
        </div>
      </div>
    </>
  );
};

export default LoadMoreData;
