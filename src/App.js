import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Articles } from "./Components/Articles";
import { UsernameContext } from "./Contexts/UsernameContext";

function App() {
  const defaultUser = "Bryn Ellison";
  return (
    <UsernameContext.Provider value={defaultUser}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Articles />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UsernameContext.Provider>
  );
}

export default App;
