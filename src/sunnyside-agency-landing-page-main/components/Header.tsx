import logo from "../images/logo.svg";
import arrow from "../images/icon-arrow-down.svg";
import menu from "../images/icon-hamburger.svg";
import { useState } from "react";

const list = ["About", "Services", "Projects"];

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className=" bg-headerMobile bg-center lg:bg-headerDesktop text-white flex flex-col lg:gap-16 gap-20 pt-5 px-5 h-svh  bg-no-repeat bg-cover ">
      <nav className="flex lg:flex-row flex-col gap-5 lg:gap-0 justify-between">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <button onClick={() => setToggle(!toggle)} className="lg:hidden">
            <img src={menu} alt="" />
          </button>
        </div>

        <div className="z-10 flex flex-col ">
          <div
            className={`arrow-right lg:hidden ${
              toggle ? "opacity-100" : "opacity-0"
            } self-end -rotate-[1deg] translate-y-3 -translate-x-0`}
          ></div>
          <ul
            className={`flex ${
              toggle ? "  opacity-100" : "opacity-0 lg:opacity-100"
            }  font-bold z-10 bg-white lg:bg-transparent lg:text-white text-Very-dark-desaturated-blue py-5  items-center gap-4 md:gap-10 lg:flex-row flex-col`}
          >
            {list.map((item) => (
              <li>
                <a className="text-lg font-medium" href="">
                  {item}
                </a>
              </li>
            ))}

            <button
              className="border-2 lg:border-white border-Yellow bg-Yellow  lg:bg-white text-Very-dark-desaturated-blue
            hover:bg-transparent hover:text-white  py-3 px-10  fraunces rounded-full"
            >
              CONTACT
            </button>
          </ul>
        </div>
      </nav>

      <header
        className={`flex flex-col ${
          toggle ? "" : ""
        } lg:-translate-y-0 -translate-y-60  items-center gap-10`}
      >
        <h1 className="lg:text-7xl text-5xl text-center tracking-widest fraunces text-white font-semibold">
          WE ARE CREATIVES
        </h1>

        <div>
          <img src={arrow} alt="" />
        </div>
      </header>
    </div>
  );
};
