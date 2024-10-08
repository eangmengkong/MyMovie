import { useState } from "react";
import Heading from "../common/Heading";
import { intheaters } from "../data/data";

// Flatten the intheaters object into an array of movie items with an added 'genre' property
const allMovies = Object.keys(intheaters).flatMap((genre) =>
  intheaters[genre].map((movie) => ({ ...movie, genre }))
);

// Create the list of genres for the filter buttons
const alltype = ["all", ...Object.keys(intheaters)];

const InTheaters = () => {
  const [list, setList] = useState(allMovies);
  const [type] = useState(alltype);

  const filterItems = (genre) => {
    if (genre === "all") {
      setList(allMovies);
    } else {
      const newItems = allMovies.filter(
        (item) => item.genre.toLowerCase() === genre.toLowerCase()
      );
      setList(newItems);
    }
  };

  return (
    <>
      <section className="intheaters">
        <Heading title="Last Showing" />
        <div className="theater-container">
          <div className="catBtn">
            {type.map((val, i) => (
              <button
                className="primaryBtn"
                onClick={() => filterItems(val)}
                key={i}
              >
                {val}
              </button>
            ))}
          </div>
          <div className="grid5 ">
            {list.map((val, i) => (
              <div className="theater-card" key={i}>
                <div className="theater-img">
                  <img src={val.img} alt={val.title} />
                </div>
                <div className="about-card">
                  <h3>{val.title}</h3>
                  <span>{val.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InTheaters;
