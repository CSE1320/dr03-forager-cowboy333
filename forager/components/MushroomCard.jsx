import React from "react";
import Mushroom from "./Mushroom";
const MushroomCard = ({mush_name, mush_image, mush_des, onClick}) => {
    return(
        <div onClick={onClick}>
            <Mushroom mush_name={mush_name} mush_image={mush_image} mush_des={mush_des} card={true}/>
        </div>
    );
};
export default MushroomCard;