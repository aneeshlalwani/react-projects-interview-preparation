import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

// eslint-disable-next-line react/prop-types
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      //   console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);

      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  console.log(data, scrollPercentage);
  if (errorMessage) {
    return <div>Error Occured {errorMessage}</div>;
  }
  if (loading) {
    return <div>Loading..... Please Sabr</div>;
  }

  return (
    <>
      <div className="top-container">
        <h1>SCROLL INDICATOR</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="list-container">
        {data && data.length > 0
          ? // eslint-disable-next-line react/jsx-key
            data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </>
  );
};

export default ScrollIndicator;
