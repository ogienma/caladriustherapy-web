import React, { FC, useState } from "react";
// import {
//     Flex,
//     Button,
//     IconButton
//   } from '@chakra-ui/react'
//   import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { StaticImage } from "gatsby-plugin-image";

export interface IProps {}
const Nav: FC<IProps> = () => {
  const [open, setOpen] = useState(false);
  // const [display, changeDisplay] = useState('none')
  return (
    <>
      <nav
        className="navbar is-fixed-top is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <StaticImage
              src="../images/caladrius-therapy-c-logo.png"
              height={40}
              alt="Caladrius Therapy Logo"
            />
          </a>
          <div className="navbar-item is-hidden-desktop">
            <div className="buttons">
              <a
                href="https://caladrius.clientsecure.me"
                className="button is-outlined small navbar-button"
                data-spwidget-scope-id="9ea36f87-56fd-4ef3-8641-a0a82839a987"
                data-spwidget-scope-uri="caladrius"
                data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                data-spwidget-scope-global
                data-spwidget-autobind
              >
                Book Appointment
              </a>
            </div>
          </div>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={open ? "is-active navbar-menu" : "navbar-menu"}
        >
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="https://blog.caladriustherapy.com">
              Blog
            </a>
            <a className="navbar-item" href="/about">
              Our Team
            </a>
            <a className="navbar-item" href="/rates">
              Rates
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a
                className="navbar-link"
                href="https://caladriustherapy.com/#services"
              >
                Services
              </a>
              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  href="/couples-therapy#couples-therapy-body"
                >
                  Couples Therapy
                </a>
                <a
                  className="navbar-item"
                  href="/group-therapy#group-therapy-body"
                >
                  Group Therapy
                </a>
                <a className="navbar-item" href="/family-therapy">
                  Family Therapy
                </a>
                <a className="navbar-item" href="/trauma-therapy">
                  Trauma
                </a>
                <a className="navbar-item" href="/emdr">
                  EMDR
                </a>
                <a className="navbar-item" href="/tf-cbt">
                  TF-CBT
                </a>
                <a
                  className="navbar-item"
                  href="/sandtray-therapy#sandtray-therapy-body"
                >
                  Sandtray Therapy
                </a>
                <a
                  className="navbar-item"
                  href="/life-transitions-therapy#life-transitions-therapy-body"
                >
                  Life Transitions
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="/#services">
                  All Services
                </a>
              </div>
            </div>
            <a className="navbar-item" href="/community-partners#community-partners-body">
            Community Partners
            </a>
            <a className="navbar-item" href="https://caladrius.clientsecure.me">
              Current Client Portal
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item ">
              <div className="buttons">
                <a
                  href="tel:7049803082"
                  className="button is-black is-outlined small navbar-button fixmetopbutton"
                >
                  <span className="icon is-small">
                    <i className="fas fa-phone"></i>
                  </span>{" "}
                  (704) 980-3082
                </a>
                <a
                  href="https://caladrius.clientsecure.me"
                  className="button is-outlined small navbar-button is-hidden-touch"
                  data-spwidget-scope-id="9ea36f87-56fd-4ef3-8641-a0a82839a987"
                  data-spwidget-scope-uri="caladrius"
                  data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                  data-spwidget-scope-global
                  data-spwidget-autobind
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
