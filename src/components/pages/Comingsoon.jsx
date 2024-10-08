import { commingsoon } from "../data/data";
import Heading from "../common/Heading";
const Comingsoon = () => {
  return (
    <>
      <section>
        <Heading title="This Week Showing" />
        <div className="comming-soon-container ">
          <div className="comming-card-container">
            {commingsoon.this_week.map((val, i) => (
              <div className="comming-card" key={i}>
                <div className="comming-img">
                  <img src={val.img} alt="" />
                </div>
                <div className="comming-content">
                  <h2>{val.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Heading title="Next Week Showing" />
        <div className="comming-soon-container ">
          <div className="comming-card-container">
            {commingsoon.next_week.map((val, i) => (
              <div className="comming-card" key={i}>
                <div className="comming-img">
                  <img src={val.img} alt="" />
                </div>
                <div className="comming-content">
                  <h2>{val.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Heading title="Next Month Showing" />
        <div className="comming-soon-container ">
          <div className="comming-card-container">
            {commingsoon.next_month.map((val, i) => (
              <div className="comming-card" key={i}>
                <div className="comming-img">
                  <img src={val.img} alt="" />
                </div>
                <div className="comming-content">
                  <h2>{val.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Comingsoon;
