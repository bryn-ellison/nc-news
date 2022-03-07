import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Articles } from "./Components/Articles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
