import Heading from "../common/Heading";
import { contact } from "../data/data";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <Heading title="Contact Us" />
          <div className="content">
            <div className="left-contact">
              <form action="">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <textarea
                  name=""
                  id=""
                  rows="15"
                  cols="20"
                  placeholder="Your Comment Here..."
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className="right-contact">
              <div className="contact">
                {contact.map((val) => (
                  <>
                    <h3>
                      <FaPhoneAlt />
                      {val.Phone}
                    </h3>
                    <h3>
                      <IoMail />
                      {val.Email}
                    </h3>

                    <h3>
                      <FaLocationDot />
                      {val.Address}
                    </h3>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
