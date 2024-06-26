  import React, { useState } from "react";

import classNames from "classnames";
import Link from "next/link.js";
import Image from "next/image.js";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { SidebarData } from "../SideBar";

import { WHITE_LOGO, BLUE_LOGO } from '~/src/app/lib/assets'
import classes from './Navbar.module.css'

const Navbar = ({theme}) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={theme === 'light'
        ? classNames(classes.navbar, classes.navbarLight)
        : classNames(classes.navbar, classes.navbarDark)
      }>
        <div className={classes.navbarContent}>
          <Link href="/" className={classes.navbar__logo}>
            <Image
              width={40}
              height={40}
              src={theme === "light" ? BLUE_LOGO : WHITE_LOGO}
              alt="logo"
            />
          </Link>
          <Link
            href="#"
            className={
              theme === "light"
                ? classNames(classes.navbar__menuBars, classes.colorLight)
                : classNames(classes.navbar__menuBars, classes.colorDark)
            }
          >
            <FaBars onClick={showSidebar} />
          </Link>

        </div>
      </div>
      <nav className={sidebar
          ? classNames(classes.navbar__menu, classes.navbar__menu__active, classes.navbarDark)
          : classes.navbar__menu
      }>
        <ul className={classes.navbar__menuItems} onClick={showSidebar}>
          <li className={classes.navbar__toggle}>
            <Link className={classNames(classes.menu__barsClose, classes.colorDark)} href="#">
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            if (item.status) {
              return (
                <li key={index} className={classes.navbar__text}>
                  <Link href={item.path}>
                    {item.icon}
                    <span className={classes.span}>{item.label}</span>
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;