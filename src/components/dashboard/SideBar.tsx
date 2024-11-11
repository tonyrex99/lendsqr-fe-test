import { FC } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import navItems from "@/constants/navigation/sidebar";
import Image from "next/image";
import { adminLogout } from "@/lib/utils/login";
interface Props {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const SideBar: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const isRouteActive = (route: string) => {
    if (pathname === "/dashboard" && route === "/dashboard") {
      return true;
    }
    const path = route.split("/")[2];
    return pathname.includes(path);
  };
  const logOut = async () => {
    await adminLogout();
    push("/login");
  };

  return (
    <div className={`side-nav ${isMenuOpen ? "nav-active" : ""}`}>
      <div className="side-nav-header">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={800}
          height={800}
          className="logo"
        />
        {/* Toggle Menu */}
        <div onClick={() => setIsMenuOpen(false)} className="menu-icon close">
          <Image
            src="/images/icons/close-icon.svg"
            alt="menu icon"
            width={35}
            height={35}
          />
        </div>
      </div>
      <div>
        <ul className="side-nav-menu">
          {navItems.map((item) => (
            <div key={item.id}>
              {!item.header ? (
                <Link href={item.link}>
                  <li
                    className={`side-nav-menu-item ${
                      isRouteActive(item.link) ? "active" : ""
                    }`}
                  >
                    {!item.header && (
                      <Image
                        src={item.icon!}
                        alt={item.title}
                        width={20}
                        height={20}
                        layout="intrinsic"
                      />
                    )}
                    <span>{item.title}</span>
                    {item.id === 1 && (
                      <span>
                        <Image
                          layout="responsive"
                          src="/images/icons/down-arrow.svg"
                          alt="expand"
                          width={800}
                          height={800}
                        />
                      </span>
                    )}
                  </li>
                </Link>
              ) : (
                <li className="nav-item-header">
                  <span>{item.title}</span>
                </li>
              )}
            </div>
          ))}
        </ul>

        <div className="logout" onClick={logOut}>
          <div>
            <Image
              src="/images/icons/logout-icon.svg"
              alt="logout icon"
              width={20}
              height={20}
            />
            <span>Logout</span>
          </div>
          <span className="version">v1.2.0</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
