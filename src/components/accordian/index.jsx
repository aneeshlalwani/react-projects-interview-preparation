/* eslint-disable react/jsx-key */
import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    if (getCurrentId === selected) {
      setSelected(null);
    } else {
      setSelected(getCurrentId);
    }
  };

  const handleMultipleSelection = (getCurrentId) => {
    let copyMultipleSelection = [...multipleSelected];
    const findIndexOfCurrentId = copyMultipleSelection.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      copyMultipleSelection.push(getCurrentId);
    } else {
      copyMultipleSelection.splice(findIndexOfCurrentId, 1);
    }
    setMultipleSelected(copyMultipleSelection);
  };
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        >
          Enable Multiple Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  enableMultipleSelection ?
                    multipleSelected.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                    :
                    selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                }
              </div>
            ))
          ) : (
            <div>No data Found</div>
          )}
        </div>
      </div>
    </>
  );
          }
