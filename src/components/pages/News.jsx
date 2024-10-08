import Heading from "../common/Heading";
const News = () => {
  return (
    <>
      <section className="news">
        <Heading title="News" />
        <div className="container">
          <div className="left">
            <div className="news title">
              <h3>News</h3>
              <span className="see-all">See All</span>
            </div>
            <div className="about-news">
              <span>12.04.09</span>
              <h4>Disney`s A Christmas Carol</h4>
              <h5>
                <q> Disney`s A Christmas Carol </q>, a multi-sensory thrillride
                re-envisioned by Academy Award®-winning filmmaker Robert
                Zemeckis, captures...
              </h5>
              <a href="">Read more...</a>
            </div>
            <div className="about-news">
              <span>11.04.09</span>
              <h4>Where the Wild Things Are</h4>
              <h5>
                Innovative director Spike Jonze collaborates with celebrated
                author Maurice Sendak to bring one of the most beloved books of
                all time to the big screen in
                <q>Where the Wild Things Are</q>,...
              </h5>
              <a href="">Read more...</a>
            </div>
            <div className="about-news">
              <span>10.04.09</span>
              <h4>The Box</h4>
              <h5>
                Norma and Arthur Lewis are a suburban couple with a young child
                who receive an anonymous gift bearing fatal and irrevocable
                consequences.
              </h5>
              <a href="">Read more...</a>
            </div>
          </div>

          <div className="right">
            <div className="commingsoon title">
              <h3>COMMING SOON!</h3>
              <span className="see-all">See All</span>
            </div>
            <div className="about-commingsoon">
              <h4>The Princess and the Frog</h4>
              <div className="news-commingsoon-card">
                <div className="news-card-img">
                  <img src="../old_images/coming-soon1.jpg" alt="" />
                </div>
                <div className="about-card">
                  <h5>
                    Walt Disney Animation Studios presents the musical
                    <q> The Princess and the Frog,</q> an animated comedy set in
                    the great city of New Orleans...
                  </h5>
                  <a href="">Read more...</a>
                </div>
              </div>
            </div>
            <div className="about-commingsoon">
              <h4>The Princess and the Frog</h4>
              <div className="news-commingsoon-card">
                <div className="news-card-img">
                  <img src="../old_images/coming-soon2.jpg" alt="" />
                </div>
                <div className="about-card">
                  <h5>
                    Walt Disney Animation Studios presents the musical
                    <q> The Princess and the Frog,</q> an animated comedy set in
                    the great city of New Orleans...
                  </h5>
                  <a href="">Read more...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
