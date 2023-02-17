import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, NftPage, UploadNft } from "./Pages";
import { Navbar, Footer } from "./Components/Partials";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<NftPage />} />
        <Route path="/upload" element={<UploadNft />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
