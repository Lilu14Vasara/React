import React from "react";
import Review from "./Review";

const DistrictDetails = ({ district, onBack }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Back Button */}
      <button
        className="mb-4 text-blue-500 hover:underline"
        onClick={onBack}
      >
        &larr; Back to Districts
      </button>

      {/* District Header */}
      <h2 className="text-3xl font-bold text-green-800 mb-6">{district.name}</h2>
      {/*<p className="text-lg mb-4">{district.description}</p>*/}

      {/* Famous Places Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Famous Places : </h3>
        <ul className="space-y-4">
          {district.famousPlaces.map((place, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow flex items-center gap-4"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h4 className="text-xl font-bold text-green-700">{place.name}</h4>
                {/*<p className="text-gray-600">{place.description}</p>*/}
                <p className="text-sm text-gray-500">
                  Distance: {place.distance} <br></br>
                   Time: {place.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Famous Food Section */}
      {/* Famous Food and Items Section */}
{/* Famous Food and Items Section */}
<div className="mb-8">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Famous Food and Items</h3>
  <div className="flex items-center gap-3 text-lg text-gray-600">
    <img
      src="https://cdn-icons-png.flaticon.com/512/2643/2643437.png" // General food icon
      alt="Food Icon"
      className="w-6 h-6 object-contain"
    />
    <span className="font-medium">
      {district.famousFood.join(", ")}.
    </span>
  </div>
</div>


      {/* Restaurants Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nearby Restaurants</h3>
        <ul className="space-y-2">
          {district.nearbyRestaurants.map((restaurant, index) => (
            <li key={index} className="text-lg text-gray-600">
              <span className="font-bold text-green-700">{restaurant.name}:</span>{" "}
              {restaurant.address}
            </li>
          ))}
        </ul>
      </div>

      {/* Hotels Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hotels for Stay</h3>
        <ul className="space-y-2">
          {district.nearbyHotels.map((hotel, index) => (
            <li key={index} className="text-lg">
              <a
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {hotel.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Suggested Visiting Order */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Suggested Visiting Order</h3>
        <p className="text-lg text-gray-600">
          {district.famousPlaces.map((place) => place.name).join(" → ")}.
        </p>
      </div>

      {/* Place Highlights with Images */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Place Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {district.famousPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-49 h-49 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-green-700">{place.name}</h4>
              <p className="text-sm text-gray-600 text-center">{place.description}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Reviews Section */}
      <Review placeName={district.name} />
    </div>
  );
};

export default DistrictDetails;
