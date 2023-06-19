import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <Router>
        <Topbar />
        <Navbar />
        <HomeScreen />
        <AboutUs />
        <OurServices />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
