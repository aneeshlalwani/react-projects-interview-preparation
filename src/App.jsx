import Accordian from "./components/accordian"
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
        <StarRanting noOfStars={10}/>
      </div>
    </>
  )
}

export default App
