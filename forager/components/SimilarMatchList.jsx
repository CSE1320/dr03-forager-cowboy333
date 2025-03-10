import React from "react";
import MushroomCard from "./MushroomCard";
const SimilarMatchList = ({sml_mushroom, sml_onclick}) => {
    if(!sml_mushroom || sml_mushroom.length === 0){
        return <p>No Similar Matches</p>
    }
    else{
        return(
            <div>
                <h3>Similar Matches</h3>
                <div>
                    {sml_mushroom.map((mushroom) => (
                        <MushroomCard mush_name={mushroom.mush_name} mush_image={mushroom.mush_image} mush_des={mushroom.mush_des} onClick={()=>sml_onclick(mushroom)}/>
                    ))}
                </div>
            </div>
        );
    }
};
export default SimilarMatchList;