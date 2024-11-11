import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const TopNav: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className="top-nav">
      <div>
        <div className="top-nav-main">
          <div className="top-nav-main">
            <Image
              layout="intrinsic"
              width={145}
              height={30}
              src="/images/logo.svg"
              alt="logo"
              className="logo"
            />
            <div className="search-input">
              <input type="search" placeholder="Search for anything" />
              <button>
                <Image
                  layout="responsive"
                  width={800}
                  height={800}
                  src="/images/icons/search-icon.svg"
                  alt="search"
                />
              </button>
            </div>
          </div>
          <div className="top-nav-right">
            <Link href="#">Docs</Link>
            <Image
              width={26}
              height={26}
              src="/images/icons/bell-icon.svg"
              alt="notify"
            />
            <div className="top-nav-profile">
              <Image
                layout="responsive"
                width={800}
                height={800}
                src="/images/avatar.svg"
                alt="avatar"
              />
              <p>Adedeji</p>
              <Image
                width={7}
                height={7}
                src="/images/icons/dropdown-icon.svg"
                alt="Avatar"
              />
            </div>
          </div>
          <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu-icon">
            <Image
              layout="responsive"
              width={800}
              height={800}
              src={`/images/icons/${isMenuOpen ? "close-icon" : "menu"}.svg`}
              alt="menu icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
