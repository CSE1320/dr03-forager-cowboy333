import React from "react";
const Mushroom = ({mush_name, mush_image, mush_des, card = false}) => {
    return(
        <div>
            <img src={mush_image} alt={mush_name}/>
            <h3>{mush_name}</h3>
            {!card && <p>{mush_des}</p>}
        </div>
        
    );
};
export default Mushroom;