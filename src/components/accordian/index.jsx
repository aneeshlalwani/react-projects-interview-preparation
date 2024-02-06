/* eslint-disable react/jsx-key */
import { useState } from "react";
import data from "./data.js";
import './styles.css';

export default function Accordian(){

    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (getCurrentId) => {

        if(getCurrentId === selected){
            setSelected(null);
        } else{
            setSelected(getCurrentId);
        }
    }
    return (
        <>
            <div className="wrapper">
                <div className="accordian">
                    {
                        data && data.length > 0 ? (
                            data.map((dataItem) => (
                                <div className="item">
                                    <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        selected === dataItem.id ? 
                                            <div className="content">{dataItem.answer}</div>
                                        : null
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