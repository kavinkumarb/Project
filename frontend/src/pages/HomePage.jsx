import { useEffect, useState } from "react";
import Page from "../components/Page";
import { useNavigate } from "react-router-dom";
import bike1 from "../assets/bike11.jpg";
import bike2 from "../assets/bike12.jpg";
import bike3 from "../assets/bike3.jpg";
import bike4 from "../assets/bike4.jpg";
import bike5 from "../assets/bike5.jpg";
import bike6 from "../assets/bike6.jpg";
import bike0 from "../assets/bike1.jpg";

import "./HomePage.css";

function HomePage() {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();

    const bikeImages = [
        { img: bike4, name: "Yamaha R1" },
        { img: bike5, name: "Ducati Panigale" },
        { img: bike6, name: "Kawasaki Ninja" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % bikeImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Page>
            {/* Full-Width Carousel */}
            <div className="carousel-container">
                <img src={bikeImages[currentImage].img} alt="Bike" className="carousel-image" />
                <div className="bike-name">{bikeImages[currentImage].name}</div>
            </div>

            {/* Info Cards */}
            <div className="info-cards">
                {[
                    { title: "Upcoming Bikes", desc: "Latest bike models launching soon!", img: bike1, path: "/upcoming-bikes" },
                    { title: "Available Bikes", desc: "Explore our range of available bikes.", img: bike2, path: "/available-bikes" },
                    { title: "Bike Accessories", desc: "Find high-quality accessories.", img: bike3, path: "/bike-accessories" },
                    { title: "Service Records", desc: "Check your bike’s service history.", img: bike0, path: "/service-records" }
                ].map((item, index) => (
                    <div key={index} className="card" onClick={() => navigate(item.path)}>
                        <img src={item.img} alt={item.title} className="card-image" />
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>Follow us on:</p>
                <div className="social-icons">
                    <a href="#" className="icon">Instagram</a>
                    <a href="#" className="icon">Facebook</a>
                    <a href="#" className="icon">Twitter</a>
                    <a href="#" className="icon">Telegram</a>
                </div>
                <p>&copy; 2024 Bike Showroom. All rights reserved.</p>
            </footer>
        </Page>
    );
}

export default HomePage;
