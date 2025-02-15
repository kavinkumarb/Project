import { useNavigate } from "react-router-dom";
import Page from "../components/Page";
import bike1 from "../assets/bike1.jpg";
import bike2 from "../assets/bike2.jpg";
import bike4 from "../assets/bike4.jpg";
import bike7 from "../assets/bike7.jpg";
import bike6 from "../assets/bike6.jpg";
import bike8 from "../assets/bike8.jpg";
import "./Pages.css";

function UpcomingBikes() {
    const navigate = useNavigate(); // Hook for navigation

    const upcomingBikes = [
        { 
            img: bike1, 
            name: "BMW S1000RR", 
            slug: "bmw-s1000rr",
            desc: "A high-performance superbike with cutting-edge technology.",
            specs: ["999cc Engine", "205 HP", "6-Speed Gearbox", "Dynamic Traction Control"]
        },
        { 
            img: bike2, 
            name: "Suzuki Hayabusa", 
            slug: "suzuki-hayabusa",
            desc: "A legendary bike with immense power and aerodynamics.",
            specs: ["1340cc Engine", "190 HP", "Top Speed: 299 km/h", "Brembo Brakes"]
        },
        { 
            img: bike4, 
            name: "KTM Duke 990", 
            slug: "ktm-duke-990",
            desc: "A powerful and aggressive streetfighter coming soon.",
            specs: ["999cc Twin Cylinder", "125 HP", "Lightweight Chassis", "Quick Shifter"]
        },
        { 
            img: bike7, 
            name: "Yamaha R1", 
            slug: "yamaha-r1",
            desc: "A fast and powerful sportbike with cutting-edge performance.",
            specs: ["998cc Engine", "200 HP", "Lightweight Chassis", "Quick Shifter"]
        },
        { 
            img: bike6, 
            name: "Ducati V8", 
            slug: "ducati-v8",
            desc: "A premium superbike with aggressive design and high-end tech.",
            specs: ["1103cc Engine", "214 HP", "Lightweight Chassis", "Brembo Brakes"]
        },
        { 
            img: bike8, 
            name: "KTM Duke 990", 
            slug: "ktm-duke-990",
            desc: "A powerful and aggressive streetfighter coming soon.",
            specs: ["999cc Twin Cylinder", "125 HP", "Lightweight Chassis", "Quick Shifter"]
        }
    ];

    return (
        <Page>
            <h1 className="page-title">🚀 Upcoming Superbikes</h1>
            <p className="page-subtitle">Stay ahead with the latest and most powerful motorcycles arriving soon!</p>
            
            <div className="page-container">
                {upcomingBikes.map((bike, index) => (
                    <div key={index} className="page-card">
                        <img src={bike.img} alt={bike.name} className="page-image" />
                        <div className="bike-details">
                            <h2>{bike.name}</h2>
                            <p className="bike-desc">{bike.desc}</p>
                            <ul className="bike-specs">
                                {bike.specs.map((spec, i) => (
                                    <li key={i}>✅ {spec}</li>
                                ))}
                            </ul>
                            <button 
                                className="learn-more"
                                onClick={() => navigate(`/bike-details/${bike.slug}`)}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Page>
    );
}

export default UpcomingBikes;
