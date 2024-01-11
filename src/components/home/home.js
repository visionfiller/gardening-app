import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { FourByFour } from "../plots/4x4";
import { EightByEight } from "../plots/8x8";
import { TenByTen } from "../plots/10x10";
import { MyPlot } from "../myplot";

export const Home = () => {
  const [plotSize, setPlotSize] = useState("");
  const [plotName, setPlotName] = useState("");
  const navigate = useNavigate();
const handleNavigate = () => {
  navigate("/plot", {
    state: {
      plotSize: plotSize,
      plotName: plotName,
    },
  });
};

  const handleNameChange = (e) => {
    setPlotName(e.target.value);
  };

  const handlePlotSize = (value) => {
    setPlotSize(value);
  };

  return (
    <>
      <div className="text-3xl font-bold underline">Choose a plot size:</div>
      <div className="flex row justify-evenly">
        <button value="1" onClick={() => handlePlotSize("1")}>
          4 x 4
        </button>
        <button value="2" onClick={() => handlePlotSize("2")}>
          8 x 8
        </button>
        <button value="3" onClick={() => handlePlotSize("3")}>
          10 x 10
        </button>
      </div>
      <div className="h-3/4">
        {plotSize === "1" && <FourByFour />}
        {plotSize === "2" && <EightByEight />}
        {plotSize === "3" && <TenByTen />}
      </div>
      <div>
        <label htmlFor="plotName" className="block text-sm font-medium text-gray-700">
          Plot Name:
        </label>
        <input
          type="text"
          id="plotName"
          name="plotName"
          value={plotName}
          onChange={handleNameChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <button onClick={handleNavigate}>Start gardening!</button>
     
    </>
  );
};
