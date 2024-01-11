import { useLocation } from "react-router-dom";
import { TenByTen } from "./plots/10x10";
import { EightByEight } from "./plots/8x8";
import { FourByFour } from "./plots/4x4";
import { useState } from "react";

export const MyPlot = () => {
    const location = useLocation();
    const { plotSize, plotName } = location.state || {};

const plants = ["tomato", "corn", "pepper", "eggplant"]
  
    return (
      <>
        <div>This is my {plotName}</div>
        {plotSize === "1" && <FourByFour/>}
        {plotSize === "2" && <EightByEight />}
        {plotSize === "3" && <TenByTen />}

       <div className="flex row justify-evenly">
        {plants.map((plant) => <div>{plant}</div>)}
       </div>


       
      </>
    );
  };
  