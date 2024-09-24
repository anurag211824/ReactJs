import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
    const gridStyles = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", 
        gap: "0.5rem",
        padding: "75px"
      };
    
  return (
    <div style={gridStyles}>
      {seriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} />
      ))}
    </div>
  );
};

export default NetflixSeries;
