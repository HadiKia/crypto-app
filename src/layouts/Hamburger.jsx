import { useState } from "react";
import HeaderButtons from "./HeaderButtons";
import FooterSocialMedia from "./FooterSocialMedia";

// icons
import profile from "../assets/profile.png";
import bolt from "../assets/bolt.svg";
import chevronRight from "../assets/chevronRight.svg";
import save from "../assets/save.svg";
import portfolio from "../assets/portfolio.svg";
import wallet from "../assets/wallet.svg";
import learn from "../assets/learn.svg";

// styles
const burgerBox = "flex flex-col items-end gap-y-1 duration-700 p-1";
const burger1 = "w-6 h-0.5 bg-[#f1f1f1] rounded-md duration-700";
const burger2 = " w-4 h-0.5 bg-[#f1f1f1] rounded-md duration-700";
const mobileMenu =
  "absolute top-[70px] left-0 right-0 h-screen bg-[#080808] overflow-scroll duration-700 px-4 py-6 pb-28";
const menuItemBox = "flex items-center justify-between py-3.5 text-[#9295A6] ";
const menuItemTitle = "flex items-center gap-x-2";

function Hamburger() {
  const open = true;
  const [menu, setMenu] = useState(open);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="flex items-center">
        <div className={burgerBox} onClick={openMenu}>
          <div
            className={menu ? burger1 : `${burger1} -rotate-45 translate-y-2.5`}
          ></div>
          <div
            className={menu ? burger2 : `${burger2} -rotate-45 opacity-0`}
          ></div>
          <div
            className={menu ? burger1 : `${burger1} rotate-45 -translate-y-0.5`}
          ></div>
          <div
            className={
              menu
                ? burger2
                : `${burger2} rotate-45 -translate-y-1.5 opacity-0 `
            }
          ></div>
        </div>
      </div>

      <div className={menu ? "hidden" : mobileMenu}>
        <div className="bg-[#121318] w-full rounded-xl p-5 mt-2 mb-10">
          {/* user */}
          <div className="flex w-full items-center gap-x-4 border-b pb-6 border-[#232530]">
            <img src={profile} alt="profile" />
            <div className="text-left">
              <p className="font-medium text-sm text-[#f1f1f1] mb-0.5">
                Allie Grater
              </p>
              <p className="text-sm font-light text-[#9295A6]">
                alliegrater1234@gmail.com
              </p>
            </div>
          </div>

          <div className="py-4 border-b mb-2 border-[#232530]">
            <a href="#" onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <img src={bolt} alt="bolt" />
                <span>Market</span>
              </div>
              <img src={chevronRight} alt="chevron" />
            </a>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <img src={save} alt="save" />
                <span>Watchlist</span>
              </div>
              <img src={chevronRight} alt="chevron" />
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <img src={portfolio} alt="portfolio" />
                <span>Portfolio</span>
              </div>
              <img src={chevronRight} alt="chevron" />
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <img src={bolt} alt="bolt" />
                <span>Trade History</span>
              </div>
              <img src={chevronRight} alt="chevron" />
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <img src={wallet} alt="wallet" />
                <span>Wallet</span>
              </div>
              <img src={chevronRight} alt="chevron" />
            </div>
            <div onClick={openMenu} className={menuItemBox}>
              <div className={menuItemTitle}>
                <img src={learn} alt="learn" />
                <span>Learn</span>
              </div>
              <img src={chevronRight} alt="chevron" />
            </div>
          </div>

          <div onClick={openMenu}>
            <HeaderButtons />
          </div>
        </div>

        <FooterSocialMedia />
      </div>
    </>
  );
}

export default Hamburger;
