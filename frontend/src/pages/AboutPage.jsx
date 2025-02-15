import { useState } from "react";
import Page from "../components/Page";
import "./AboutPage.css";

function AboutPage() {
    // State for storing feedback
    const [reviews, setReviews] = useState([
        { name: "John Doe", rating: 5, feedback: "Amazing service and a great selection of bikes!" },
        { name: "Jane Smith", rating: 4, feedback: "Good experience, but wish they had more accessories." },
        { name: "Alex Johnson", rating: 5, feedback: "Best bike showroom in town!" }
    ]);

    // State for form input
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [feedback, setFeedback] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && feedback) {
            const newReview = { name, rating, feedback };
            setReviews([...reviews, newReview]);
            setName("");
            setRating(5);
            setFeedback("");
        } else {
            alert("Please enter your name and feedback.");
        }
    };

    return (
        <Page>
            <div className="about-container">
                {/* Showroom Info */}
                <section className="showroom-info">
                    <h1>Welcome to Our Bike Showroom</h1>
                    <p>We provide the best selection of bikes, accessories, and top-notch service for all bike enthusiasts.</p>
                    <img src="../assets/bike1.jpg" alt="Bike Showroom" className="showroom-image"/>
                </section>

                {/* Customer Feedback */}
                <section className="feedback-section">
                    <h2>Customer Feedback</h2>
                    <div className="reviews">
                        {reviews.map((review, index) => (
                            <div key={index} className="review-card">
                                <p className="review-name">{review.name}</p>
                                <p className="review-rating">{"⭐".repeat(review.rating)}</p>
                                <p className="review-text">"{review.feedback}"</p>
                            </div>
                        ))}
                    </div>

                    {/* Feedback Form */}
                    <div className="feedback-form">
                        <h3>Leave Your Feedback</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                                {[5, 4, 3, 2, 1].map((num) => (
                                    <option key={num} value={num}>{num} Stars</option>
                                ))}
                            </select>
                            <textarea
                                placeholder="Your Feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                required
                            />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </section>

                {/* Showroom Locations */}
                <section className="location-section">
                    <h2>Our Locations</h2>
                    <p><strong>🏠 Address:</strong> 123 Bike Street, City, Country</p>
                    <p><strong>📞 Contact:</strong> +123-456-7890</p>
                    <p><strong>🕒 Hours:</strong> Mon-Sat: 9 AM - 8 PM, Sun: Closed</p>
                    <img src="../assets/map.jpg" alt="Showroom Location" className="map-image"/>
                </section>
            </div>
        </Page>
    );
}

export default AboutPage;
