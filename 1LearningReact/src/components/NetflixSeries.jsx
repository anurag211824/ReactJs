import React from "react";
// Import your JSON data if it's within the src folder
import seriesData from "../api/seriesData.json"; // Ensure the path is correct
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <div className="container mx-auto px-40 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Netflix Series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {seriesData.map((series) => (
          <SeriesCard key={series.id} series={series}/>
        ))}
      </div>
    </div>
  );
};

export default NetflixSeries;
