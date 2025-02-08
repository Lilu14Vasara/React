import React, { useState, useEffect } from "react";

const Review = ({ placeName }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  // Load reviews from localStorage when the component mounts
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  // Save reviews to localStorage whenever the reviews state changes
  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSubmitReview = () => {
    if (newReview && rating) {
      const newReviewData = {
        text: newReview,
        rating: rating,
        placeName,
      };
      const updatedReviews = [...reviews, newReviewData];
      setReviews(updatedReviews); 
      setNewReview(""); 
      setRating(0); 
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add Your Review</h3>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Write your review here..."
          value={newReview}
          onChange={handleReviewChange}
        ></textarea>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="text-lg text-gray-800">Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className={`text-xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmitReview}
        className="px-4 py-2 bg-green-500 text-white rounded-md"
      >
        Submit Review
      </button>

      <div className="mt-8">
        <h4 className="text-xl font-semibold">Reviews:</h4>
        <ul>
          {reviews
            .filter((review) => review.placeName === placeName) // Filter reviews for the current place
            .map((review, index) => (
              <li key={index} className="mb-4">
                <p className="text-gray-600">{review.text}</p>
                <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Review;
