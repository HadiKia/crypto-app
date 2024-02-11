import FooterSocialMedia from "./FooterSocialMedia";

const logoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="155" height="38" fill="none">
    <path
      className="fill-[#5367FF]"
      d="M17.87 7.432v-4.75H2.37v32.636h15.5v-4.75c-3.175 0-6.22-1.22-8.465-3.389C7.16 25.01 5.9 22.068 5.9 19c0-3.067 1.261-6.01 3.506-8.179 2.245-2.169 5.29-3.388 8.466-3.388Z"
    />
    <path
      fill="#5367FF"
      d="M17.872 7.432v23.135c3.175 0 6.22-1.218 8.466-3.388 2.245-2.169 3.506-5.111 3.506-8.18 0-3.067-1.261-6.01-3.506-8.179-2.245-2.17-5.29-3.388-8.466-3.388ZM45.362 29.084a5.217 5.217 0 0 1-2.21-.474c-.678-.316-1.233-.837-1.665-1.562-.409-.702-.613-1.611-.613-2.73v-7.82h3.563V23.3c0 .91.227 1.558.682 1.944.455.385 1.007.578 1.654.578.957-.123 1.654-.478 2.094-1.064.44-.586.66-1.288.66-2.105v-6.154h3.539v12.446h-3.54v-2.198c-.91 1.558-2.298 2.337-4.164 2.337Zm14.717-.139h-3.562V16.5h3.562v2.244c.88-1.542 2.252-2.337 4.118-2.383v3.355l-.509-.023a4.87 4.87 0 0 0-1.723.312c-.548.2-.999.543-1.354 1.03-.354.485-.532 1.125-.532 1.92v5.991Z"
    />
    <path
      className="fill-[#f1f1f1]"
      d="M73.544 29.2c-2.437 0-4.461-.799-6.073-2.395s-2.418-3.597-2.418-6.003c0-2.344.822-4.315 2.464-5.91 1.643-1.597 3.698-2.395 6.166-2.395 2.406 0 4.534.902 6.385 2.706l-2.129 2.615c-1.295-1.42-2.699-2.129-4.21-2.129-1.373 0-2.537.467-3.493 1.4-.957.933-1.435 2.155-1.435 3.667 0 .64.104 1.264.313 1.873.208.61.516 1.157.925 1.643.409.486.921.875 1.538 1.168.617.286 1.335.428 2.152.428 1.45 0 2.853-.64 4.21-1.92l2.152 2.337c-2.02 1.943-4.203 2.915-6.547 2.915Zm12.222-.255h-3.562V16.5h3.563v2.244c.879-1.542 2.251-2.337 4.117-2.383v3.355l-.509-.023a4.87 4.87 0 0 0-1.723.312c-.548.2-.999.543-1.353 1.03-.355.485-.533 1.125-.533 1.92v5.991Zm8.107 4.65c-1.31 0-2.436-.4-3.377-1.203L92 29.824c.524.448 1.064.671 1.619.671.756 0 1.303-.37 1.642-1.11l.348-.694-5.16-12.192h3.679l3.262 8.56 2.938-8.56h3.563l-5.46 13.834c-.88 2.175-2.398 3.262-4.558 3.262Zm15.256-.162h-3.562V16.5h3.562v1.828c.941-1.296 2.252-1.944 3.933-1.944.756 0 1.485.124 2.186.37.702.24 1.327.617 1.874 1.134.548.517.984 1.18 1.307 1.99.324.81.486 1.78.486 2.915 0 1.82-.509 3.323-1.527 4.51-1.018 1.188-2.436 1.782-4.256 1.782-1.728 0-3.062-.648-4.003-1.943v6.292Zm3.1-7.31c1.018 0 1.786-.336 2.302-1.007.517-.67.775-1.484.775-2.44 0-.91-.254-1.708-.763-2.395-.509-.686-1.28-1.03-2.314-1.03-1.033 0-1.808.34-2.325 1.019-.516.678-.775 1.48-.775 2.406 0 1.157.305 2.02.914 2.59.609.572 1.338.857 2.186.857Zm13.502 2.984c-1.111 0-2.04-.305-2.788-.914-.748-.609-1.122-1.584-1.122-2.926v-5.76h-1.735v-2.453h1.735V13.63h3.539v3.424h3.378v2.476h-3.378v5.135c0 .957.378 1.435 1.134 1.435.493 0 1.072-.155 1.735-.463l.74 2.614a6.355 6.355 0 0 1-3.238.856Zm10.916-.023c-1.45 0-2.672-.285-3.667-.856-1.041-.61-1.804-1.396-2.29-2.36a6.888 6.888 0 0 1-.729-3.146c0-1.388.297-2.552.891-3.493.64-.98 1.469-1.697 2.487-2.152 1.018-.462 2.12-.694 3.308-.694 1.897 0 3.482.54 4.754 1.62 1.273 1.08 1.909 2.652 1.909 4.72 0 .817-.131 1.607-.394 2.37a5.683 5.683 0 0 1-1.203 2.036c-.539.602-1.23 1.08-2.07 1.434-.841.348-1.839.521-2.996.521Zm0-2.892c.848 0 1.577-.289 2.186-.867.609-.579.914-1.43.914-2.557 0-1.126-.305-1.978-.914-2.556a3.064 3.064 0 0 0-2.186-.867c-.864 0-1.6.289-2.209.867-.61.578-.914 1.43-.914 2.556 0 1.126.304 1.978.914 2.557.609.578 1.345.867 2.209.867Z"
    />
  </svg>
);

const titleStyle = "font-semibold text-xl mb-5";
const linkBoxStyle =
  "flex flex-col gap-y-3 text-sm font-medium text-[#9295A6] ";
const linkStyle = "hover:text-[#5367FF] duration-500";

function Footer() {
  return (
    <div className="pt-10 bg-[#121318]">
      <div className="container max-w-screen-xl mx-auto text-left text-[#f1f1f1] px-5 xl:px-0">
        <div className="mb-10">{logoIcon}</div>

        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-20 lg:justify-between pb-8 mb-7 border-b border-[#232530]">
          <div className="flex gap-x-20 lg:w-full lg:gap-x-40 xl:gap-x-64">
            <div>
              <h5 className={titleStyle}>Exchange</h5>
              <div className={linkBoxStyle}>
                <a href="#" className={linkStyle}>
                  Exchange Home
                </a>
                <a href="#" className={linkStyle}>
                  Margin Trading
                </a>
                <a href="#" className={linkStyle}>
                  Derivatives
                </a>
                <a href="#" className={linkStyle}>
                  Supercharger
                </a>
              </div>
            </div>
            <div>
              <h5 className={titleStyle}>Support</h5>
              <div className={linkBoxStyle}>
                <a href="#" className={linkStyle}>
                  Request form
                </a>
                <a href="#" className={linkStyle}>
                  Contact Support
                </a>
                <a href="#" className={linkStyle}>
                  FAQ
                </a>
                <a href="#" className={linkStyle}>
                  Security
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-x-20 lg:w-full lg:gap-x-40 xl:gap-x-64">
            <div>
              <h5 className={titleStyle}>Company</h5>
              <div className={linkBoxStyle}>
                <a href="#" className={linkStyle}>
                  About us
                </a>
                <a href="#" className={linkStyle}>
                  Careers
                </a>
                <a href="#" className={linkStyle}>
                  News
                </a>
                <a href="#" className={linkStyle}>
                  Security
                </a>
                <a href="#" className={linkStyle}>
                  Community
                </a>
                <a href="#" className={linkStyle}>
                  Announcements
                </a>
              </div>
            </div>
            <div>
              <h5 className={titleStyle}>Resources</h5>
              <div className={linkBoxStyle}>
                <a href="#" className={linkStyle}>
                  Downloads
                </a>
                <a href="#" className={linkStyle}>
                  Desktop Application
                </a>
                <a href="#" className={linkStyle}>
                  But Crypto
                </a>
                <a href="#" className={linkStyle}>
                  Referral
                </a>
                <a href="#" className={linkStyle}>
                  Listing Trading
                </a>
              </div>
            </div>
          </div>
        </div>

        <FooterSocialMedia />
      </div>
    </div>
  );
}

export default Footer;
