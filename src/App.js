import logo from './logo.svg';
import './App.css';
import { FourByFour } from './components/plots/4x4';
import { Link, Route, Routes } from "react-router-dom"
import { NavBar } from './components/nav/NavBar';
import { AppView } from './components/views/AppView';

function App() {

  return (
    <>
    <NavBar />
    <AppView />
    
    </>
  );
}

export default App;
