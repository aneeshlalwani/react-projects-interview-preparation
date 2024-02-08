import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import RandomColorGenerator from "./components/random-color-generator";
import StarRanting from "./components/star-rating";

function App() {
  return (
    <>
      <div className="App">
        {/* Accordian Component */}
        <Accordian />
        {/* Random Color Generator */}
        <RandomColorGenerator />
        {/* Star Rating */}
        <StarRanting noOfStars={10} />
        {/* Image Slider */}
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={4}
        />
      </div>
    </>
  );
}

export default App;
