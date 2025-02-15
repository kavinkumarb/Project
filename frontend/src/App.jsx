import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import UpcomingBikes from "./pages/UpcomingBikes";
import AvailableBikes from "./pages/AvailablesBikes";
import BikeAccessories from "./pages/BikeAccessories";
import ServiceRecords from "./pages/ServiceRecords";
import BikeDetails from "./pages/BikeDetails";

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const NAVBAR_ITEMS = [
    {  text: "home", path: "/", component: <HomePage /> },
    {  text: "About", path: "/about", component: <AboutPage /> },
    {  text: "search", path: "/search", component: <SearchPage /> },
    {  text: "Profile", path: "/profile", component: <ProfilePage /> },
  ];

  return (
    <Router>
      <div className="app">
        <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
        <div className="main-container">
          <Routes>
            {NAVBAR_ITEMS.map((item, index) => (
              <Route key={index} path={item.path} element={item.component} />
            ))}
            <Route path="/upcoming-bikes" element={<UpcomingBikes />} />
            <Route path="/available-bikes" element={<AvailableBikes />} />
            <Route path="/bike-accessories" element={<BikeAccessories />} />
            <Route path="/service-records" element={<ServiceRecords />} />
            <Route path="/bike-details/:slug" element={<BikeDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
