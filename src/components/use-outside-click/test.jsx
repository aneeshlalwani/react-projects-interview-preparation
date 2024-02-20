import { useRef, useState } from "react";
import UseOnclickOutside from ".";

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOnclickOutside(ref, () => setShowContent(false));

  return (
    <>
      <div>
        {showContent ? (
          <div ref={ref}>
            <h1>This is some random content</h1>
            <p>
              Click outside of this to close this, else it will not be closed!
            </p>
          </div>
        ) : (
          <button onClick={() => setShowContent(true)}>Show Content</button>
        )}
      </div>
    </>
  );
};

export default UseOnclickOutsideTest;
