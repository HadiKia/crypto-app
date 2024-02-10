import instagramIcon from "../assets/instagram.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

const itemsStyles =
  "text-center text-sm lg:text-base text-[#9295A6] font-medium mb-4";

function FooterSocialMedia() {
  return (
    <div className="md:flex items-center justify-between md:pb-3">
      <div className="md:flex items-center gap-x-5">
        <div className={itemsStyles}>
          &copy; 2024 dynamic. All rights reserved
        </div>
        <div className={`${itemsStyles} text-xs`}>
          <span className="px-4">Privacy</span>
          <span className="px-4 border-l border-[#232530]">Terms</span>
          <span className="px-4 border-l border-[#232530]">Sitemap</span>
        </div>
      </div>
      <div
        className={`${itemsStyles} flex items-center justify-center gap-x-4 -mb-4 md:mb-0 pb-4 `}
      >
        <img src={instagramIcon} alt="instagram" />
        <img src={githubIcon} alt="github" />
        <img src={linkedinIcon} alt="linkedin" />
      </div>
    </div>
  );
}

export default FooterSocialMedia;
