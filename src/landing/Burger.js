import React from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import {
  BagIcon,
  CloseIcon,
  GmailIcon,
  HomeIcon,
  ListIcon,
  Logo,
  ProjectIcon,
  RectangleGroupIcon,
  UserIcon,
} from "../svg";
import Socials from "./profile/Socials";
export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 3.3rem;
  height: 3.3rem;
  background: transparent;
  cursor: pointer;
  padding: 0.8rem 0.6rem;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.1rem;
    background: var(--whitePen);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 4px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(34deg)" : "rotate(0)")};
    }
    /* :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    } */
    :nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(330deg)" : "rotate(0)")};
    }
  }
`;
const Burger = ({ open, setOpen, handleClick }) => {
  const { t } = useTranslation();
  const menuList = [
    { id: 1, name: "home", icon: HomeIcon },
    {
      id: 2,
      name: "aboutMe",
      icon: UserIcon,
    },
    {
      id: 3,
      name: "specializations",
      icon: ListIcon,
    },
    {
      id: 4,
      name: "workExperience",
      icon: BagIcon,
    },
    {
      id: 5,
      name: "skills",
      icon: RectangleGroupIcon,
    },
    {
      id: 6,
      name: "projects",
      icon: ProjectIcon,
    },
    {
      id: 7,
      name: "contactMe",
      icon: GmailIcon,
    },
  ];
  return (
    <>
      <StyledBurger
        aria-label="Toggle menu"
        open={open}
        onClick={() => setOpen(!open)}
        className={`boxStyle fixed lg:top-20 top-3 ${"lg:right-7 right-5"} cursor-pointer`}
      >
        <span />
        {/* <span /> */}
        <span />
      </StyledBurger>

      <div
        className={`duration-700 ${
          open
            ? "fixed backdrop-blur-sm right-0 left-0 top-0 bottom-0 z-30 "
            : "opacity-0"
        }`}
        onClick={()=>setOpen(false)}
      >

        <nav
          className={`${
            !open && "translate-x-full "
          } duration-700 delay-300  backdrop-blur-md bg-zinc-950 pt-16 p-10 fixed top-0 right-0 bottom-0 w-72 z-20`}
        >
          <Logo />
          <CloseIcon
            className="absolute top-5 left-5 "
            onClick={() => setOpen(false)}
          />
          <ul className="border-b border-gray-500 pb-5">
            {menuList.map((item, index) => (
              <li
            
                key={index}
                className="leading-10 flex items-center"
                onClick={() => 
                  handleClick(item.id)
                  
                }
              >
                {<item.icon className={"mx-3"} />}
                {item.name}
              </li>
            ))}
          </ul>
          <Socials />
        </nav>
      </div>
    </>
  );
};

export default Burger;
