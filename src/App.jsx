import "./App.css";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Accounts from "./page/Accounts";
import { Workspaces } from "./page/Workspaces";

function App() {
  return (
    <>
      <div className="home">
        <NavBar />
        <div className="content">
          <Header />
          <div className="">
            <Routes>
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/workspaces" element={<Workspaces />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
