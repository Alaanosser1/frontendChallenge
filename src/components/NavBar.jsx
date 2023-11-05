import { useState } from "react";
import classes from "../styles/NavbarSimple.module.scss";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import { ReactComponent as HomeSvg } from "../assets/images/Home.svg";
import { ReactComponent as RowVertical } from "../assets/images/row-vertical.svg";
import { ReactComponent as SliderHorizontal } from "../assets/images/slider-horizontal.svg";
import { ReactComponent as UserOctagon } from "../assets/images/user-octagon.svg";
import { ReactComponent as Logout } from "../assets/images/logout.svg";
import { ReactComponent as Lifeboy } from "../assets/images/lifeboy.svg";

const data = [
  { link: "", label: "Home", icon: HomeSvg },
  { link: "/accounts", label: "Accounts", icon: RowVertical },
  { link: "workspaces", label: "Workspaces", icon: SliderHorizontal },
  { link: "", label: "Account", icon: UserOctagon },
];

export function NavBar() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <Link
      to={item.link} // Use the 'to' prop to specify the route
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h1>BORD</h1>
      </div>
      <div className={classes.navbarMain}>
        <div className={classes.links}>{links}</div>
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Lifeboy className={classes.linkIcon} stroke={1.5} />
          <span>Support</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Logout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
