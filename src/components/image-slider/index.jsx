import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
// eslint-disable-next-line react/prop-types
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  function handlePrevious() {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function handleNext() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading Data! Please Hold your Horse</div>;
  }
  if (errorMessage !== null) {
    return <div>Error Occured!</div>;
  }
  return (
    <>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={() => handlePrevious()}
        />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.download_url}
                className={
                  currentSlide === index
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            ))
          : null}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={() => handleNext()}
        />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
