import React from "react";
import MushroomCard from "./MushroomCard";
const MushroomList = ({ml_mushroom, ml_onclick}) => {
    let data;
    if(ml_mushroom.length > 0){
        data = ml_mushroom.map((mushroom) => (
            <MushroomCard mush_name={mushroom.mush_name} mush_image={mushroom.mush_image} mush_des={mushroom.mush_des} onClick={()=>ml_onclick(mushroom)}/>
        ));
    }
    else{
        data = <p>No Mushroom</p>
    }
    return <div>{data}</div>;
};
export default MushroomList;