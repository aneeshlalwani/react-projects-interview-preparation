import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColorGenerator from "./components/random-color-generator";
import StarRanting from "./components/star-rating";
import LightDarkModeSwitch from "./components/light-dark-mode-switch";
import LoadMoreData from "./components/load-more-data";

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
        {/* QR Code Generator */}
        <QRCodeGenerator />
        {/* Light Dark Mode Theme Switch */}
        {/* <LightDarkModeSwitch /> */}
        {/* Load More Data Component */}
        <LoadMoreData />
      </div>
    </>
  );
}

export default App;
