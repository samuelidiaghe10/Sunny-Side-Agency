import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";

export const Footer = () => {
  const lists = ["About", "Services", "Projects"];

  return (
    <footer className="flex flex-col py-10 items-center gap-20 bg-moderate-cyan-(footer) ">
      <div className="flex flex-col items-center gap-6">
        <div>
          <img src={logo} alt="" />
        </div>

        <ul className="flex gap-14">
          {lists.map((list) => (
            <li>
              <a
                className=" text-Dark-moderate-cyan-(footer) font-semibold hover:text-white text-lg duration-300"
                href=""
              >
                {list}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-7">
        <div>
          <img className="icons duration-300" src={facebook} alt="" />
        </div>
        <div>
          <img className="icons duration-300" src={instagram} alt="" />
        </div>
        <div>
          <img className="icons duration-300" src={twitter} alt="" />
        </div>
        <div>
          <img className="icons duration-300" src={pinterest} alt="" />
        </div>
      </div>
    </footer>
  );
};
