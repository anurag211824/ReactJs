import React from "react";

const SeriesCard = (props) => {
  const {image_url, name, rating, description, cast, genre, watch_url } = props.series;
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={image_url}
          alt={name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-3">{name}</h2>
          <p className="text-gray-700 mb-3">
            <strong>Rating:</strong> {rating}
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Description:</strong> {description}
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Cast:</strong> {cast.join(", ")}
          </p>
          <p className="text-gray-700 mb-3">
            <strong>Genre:</strong> {genre.join(", ")}
          </p>
          <a
            href={watch_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Watch Now
          </a>
        </div>
      </div>
    </>
  );
};

export default SeriesCard;
