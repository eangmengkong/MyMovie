import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { navlink } from "../data/data";
import { useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <BiSolidMoviePlay style={{ fontSize: "50px", marginTop: "10px" }} />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((val, i) => (
              <Link to={val.url} key={i}>
                {val.text}
              </Link>
            ))}
          </div>

          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <span>
              <Menu />
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
