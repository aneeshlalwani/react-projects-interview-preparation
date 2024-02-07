import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './styles.css';
// eslint-disable-next-line react/prop-types
const StarRanting = ( {noOfStars = 5} ) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex){
        // console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(){
        // console.log(getCurrentIndex);
        setHover(rating);
    }
    return (
    <>
        <div className="star-rating">
            {
                    [...Array(noOfStars)].map((_, index) =>{
                    index += 1;

                    return( 
                    <FaStar 
                       key={index}
                       className={index <= (hover || rating) ? 'active' : 'inactive'}
                       onClick={()=> handleClick(index)}
                       onMouseMove={()=> handleMouseEnter(index)}
                       onMouseLeave={()=> handleMouseLeave(index)}
                       size={40} 
                    />
                    )
                })
            }
        </div>
    </>
)
}

export default StarRanting;