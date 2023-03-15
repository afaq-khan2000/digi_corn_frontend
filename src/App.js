import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  ConnectWallet,
  Home,
  Login,
  Marketplace,
  NftPage,
  Profile,
  SignUp,
  UploadNft,
} from "./Pages";
import { Navbar, Footer } from "./Components/Partials";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<NftPage />} />
        <Route path="/upload" element={<UploadNft />} />
        <Route path="/explore" element={<Marketplace />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
