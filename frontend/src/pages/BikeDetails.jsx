import { useParams } from "react-router-dom";
import Page from "../components/Page";
import bike1 from "../assets/bike1.jpg";
import bike2 from "../assets/bike2.jpg";
import bike4 from "../assets/bike4.jpg";
import bike7 from "../assets/bike7.jpg";
import bike6 from "../assets/bike6.jpg";
import "./BikeDetails.css";

// Dummy data for bike details
const bikeData = {
    "bmw-s1000rr": {
        name: "BMW S1000RR",
        img: bike1,
        engine: "999cc, 4-cylinder",
        tyre: "Bridgestone Battlax",
        groundClearance: "140mm",
        mileage: "15 km/l",
        topSpeed: "299 km/h",
        rpm: "13,500 RPM",
        power: "205 HP",
        fuelCapacity: "16.5L",
        headlight: "LED",
        indicators: "LED",
        suspension: "Fully adjustable front & rear suspension",
    },
    "suzuki-hayabusa": {
        name: "Suzuki Hayabusa",
        img: bike2,
        engine: "1340cc, 4-cylinder",
        tyre: "Bridgestone Battlax Hypersport",
        groundClearance: "120mm",
        mileage: "11 km/l",
        topSpeed: "312 km/h",
        rpm: "11,500 RPM",
        power: "190 HP",
        fuelCapacity: "20L",
        headlight: "LED",
        indicators: "LED",
        suspension: "Inverted front fork, monoshock rear",
    },
    "ktm-duke-990": {
        name: "KTM Duke 990",
        img: bike4,
        engine: "999cc, Twin Cylinder",
        tyre: "Metzeler Sportec M7",
        groundClearance: "150mm",
        mileage: "18 km/l",
        topSpeed: "250 km/h",
        rpm: "12,000 RPM",
        power: "125 HP",
        fuelCapacity: "14L",
        headlight: "LED",
        indicators: "LED",
        suspension: "WP APEX front & rear",
    },
    "yamaha-r1": {
        name: "Yamaha R1",
        img: bike7,
        engine: "998cc, 4-cylinder",
        tyre: "Michelin Power RS",
        groundClearance: "130mm",
        mileage: "14 km/l",
        topSpeed: "299 km/h",
        rpm: "13,500 RPM",
        power: "200 HP",
        fuelCapacity: "17L",
        headlight: "LED",
        indicators: "LED",
        suspension: "KYB front & rear",
    },
    "ducati-v8": {
        name: "Ducati V8",
        img: bike6,
        engine: "1103cc, V4",
        tyre: "Pirelli Diablo Supercorsa",
        groundClearance: "125mm",
        mileage: "12 km/l",
        topSpeed: "320 km/h",
        rpm: "14,000 RPM",
        power: "214 HP",
        fuelCapacity: "16L",
        headlight: "Full LED",
        indicators: "Dynamic LED",
        suspension: "Ohlins fully adjustable",
    }
};

function BikeDetails() {
    const { slug } = useParams(); // Get the bike slug from URL
    const bike = bikeData[slug];

    if (!bike) {
        return <Page><h1>Bike not found!</h1></Page>;
    }

    return (
        <Page>
            <div className="bike-details-container">
                <img src={bike.img} alt={bike.name} className="bike-details-image" />
                <div className="bike-info">
                    <h1 className="bike-title">{bike.name}</h1>
                    <div className="specs-grid">
                        <p><strong>Engine:</strong> {bike.engine}</p>
                        <p><strong>Tyre:</strong> {bike.tyre}</p>
                        <p><strong>Ground Clearance:</strong> {bike.groundClearance}</p>
                        <p><strong>Mileage:</strong> {bike.mileage}</p>
                        <p><strong>Top Speed:</strong> {bike.topSpeed}</p>
                        <p><strong>RPM:</strong> {bike.rpm}</p>
                        <p><strong>Power:</strong> {bike.power}</p>
                        <p><strong>Fuel Capacity:</strong> {bike.fuelCapacity}</p>
                        <p><strong>Headlight:</strong> {bike.headlight}</p>
                        <p><strong>Indicators:</strong> {bike.indicators}</p>
                        <p><strong>Suspension:</strong> {bike.suspension}</p>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default BikeDetails;
