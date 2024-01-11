import { useState } from "react"
import { Link, Route, Router, Routes } from "react-router-dom"
import { FourByFour } from "../plots/4x4"
import { EightByEight } from "../plots/8x8"
import { TenByTen } from "../plots/10x10"
import { Home } from "../home/home"
import { MyPlot } from "../myplot"

export const AppView =() =>{
    return <>
  
    <Routes>
	<Route path ="*" element= {<Home/>}></Route>
    <Route path="/plot" element={<MyPlot/>}></Route>
    </Routes>
    
  



	  





</>



}