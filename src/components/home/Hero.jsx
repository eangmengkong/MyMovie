import { useEffect, useState } from "react";
import {
  FaSearch,
  FaStar,
  FaCommentAlt,
  FaGreaterThan,
  FaLessThan,
} from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";
import { hero } from "../data/data";

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const nextEl = document.querySelector(".next");
    const prevEl = document.querySelector(".prev");
    const imgsEl = document.querySelectorAll(".slider");
    const imgContainerEl = document.querySelector(".img-container");

    let timeout;

    const updateImg = () => {
      const imgWidth = window.innerWidth <= 768 ? 480 : 1520; //

      if (currentImg >= imgsEl.length) {
        setCurrentImg(0);
      } else if (currentImg < 0) {
        setCurrentImg(imgsEl.length - 1);
      }

      imgContainerEl.style.transform = `translateX(-${
        currentImg * imgWidth
      }px)`;
      timeout = setTimeout(() => {
        setCurrentImg((prev) => prev + 1);
      }, 3000);
    };

    const nextClickHandler = () => {
      setCurrentImg((prev) => prev + 1);
      clearTimeout(timeout);
      updateImg();
    };

    const prevClickHandler = () => {
      setCurrentImg((prev) => prev - 1);
      clearTimeout(timeout);
      updateImg();
    };

    nextEl.addEventListener("click", nextClickHandler);
    prevEl.addEventListener("click", prevClickHandler);

    updateImg();

    // Listen for window resize to update the image width
    window.addEventListener("resize", updateImg);

    return () => {
      clearTimeout(timeout);
      nextEl.removeEventListener("click", nextClickHandler);
      prevEl.removeEventListener("click", prevClickHandler);
      window.removeEventListener("resize", updateImg); // Clean up the resize event listener
    };
  }, [currentImg]);

  return (
    <section>
      <div className="slide-img-container">
        <div className="img-container">
          {hero.slider_img.map((val) => (
            <>
              <img src={val.img} alt="" className="slider" />
            </>
          ))}
        </div>
        <i className=" btn prev">
          <FaLessThan />
        </i>
        <i className=" btn next">
          <FaGreaterThan />
        </i>
      </div>
      <hr className="border-hr-doted" />
      <div className="hero-container">
        <div className="header">
          <li>SHOW ALL</li>
          <li>LATEST TRAILERS</li>
          <li>TOP RATED</li>
          <li>MOST COMMENTED</li>
        </div>
        <div className="search-container">
          <h3>SEARCH</h3>
          <input type="text" placeholder="Enter search here" />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
      </div>
      <hr className="border-hr-doted" />

      <div className="card-container">
        <div className="card-title">
          <h4>LATEST TRAILERS</h4>
          <h4 className="see-all">See all</h4>
        </div>
        <div className="card-box">
          {hero.Latest_Movie.map((val) => (
            <div className="card" key={val.id}>
              <div className="card-img">
                <img src={val.card_image} alt="" />
              </div>
              <div className="overlay">
                <h2>PLAY TRAILER</h2>
                <a href="">
                  <CgPlayButtonO className="play-btn" />
                </a>
              </div>
              <div className="card-rating">
                <div className="star">
                  <h5>RATING</h5>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                </div>
                <div className="comment">
                  <span>
                    <FaCommentAlt />
                    <br />
                    12
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-hr-doted" />

      <div className="card-container">
        <div className="card-title">
          <h4>TOP RATED</h4>
          <h4 className="see-all">See all</h4>
        </div>
        <div className="card-box">
          {hero.Top_Rated.map((val) => (
            <div className="card" key={val.id}>
              <div className="card-img">
                <img src={val.card_image} alt="" />
              </div>
              <div className="overlay">
                <h2>PLAY TRAILER</h2>
                <a href="">
                  <CgPlayButtonO className="play-btn" />
                </a>
              </div>
              <div className="card-rating">
                <div className="star">
                  <h5>RATING</h5>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                </div>
                <div className="comment">
                  <span>
                    <FaCommentAlt />
                    <br />
                    12
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-hr-doted" />

      <div className="card-container">
        <div className="card-title">
          <h4>MOST COMMENTED</h4>
          <h4 className="see-all">See all</h4>
        </div>
        <div className="card-box">
          {hero.Most_Commented.map((val) => (
            <div className="card" key={val.id}>
              <div className="card-img">
                <img src={val.card_image} alt="" />
              </div>
              <div className="overlay">
                <h2>PLAY TRAILER</h2>
                <a href="">
                  <CgPlayButtonO className="play-btn" />
                </a>
              </div>
              <div className="card-rating">
                <div className="star">
                  <h5>RATING</h5>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                  <span>
                    <FaStar className="star-icon" />
                  </span>
                </div>
                <div className="comment">
                  <span>
                    <FaCommentAlt />
                    <br />
                    12
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-hr-doted" />
    </section>
  );
};

export default Hero;
