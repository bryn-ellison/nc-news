import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
