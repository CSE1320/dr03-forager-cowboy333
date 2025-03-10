import { useState } from "react";
function Pill() {
    const [selected, setselected] = useState(false);
    const [selectionstate, setselectionstate] = useState("unselected");
    const clickhandler = () => {
        if(selectionstate !== "disable"){
            setselectionstate(selectionstate === "selected" ? "unselected" : "selected");

        }
    };
    let bgcolor = "bg-blue-500";
    if(selectionstate === "selected"){
        bgcolor = "bg-red-500";
    }
    else if(selectionstate === "unselected"){
        bgcolor = "bg-gray-300";
    }
    else if(selectionstate === "disabled") {
        bgcolor = "bg-black";
    }
    return(
        <div onClick={clickhandler}>
            Toxic - {selectionstate}
        </div>
    );
}
function pillList(){
    return(
        <div>
            <Pill label = ""/>
            <Pill label = ""/>
            <Pill label = ""/>
            <Pill label = ""/>
        </div>
    );
}

export default pillList;