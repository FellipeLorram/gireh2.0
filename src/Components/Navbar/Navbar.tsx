import { ReactNode } from "react";
import { NavbarContainer, NavbarIconContainer } from "./Navbar.styled";

interface Props {
  children: ReactNode;
}

export const Navbar = {
  NavbarWrapper: ({ children }: Props) => {
    return <NavbarContainer>{children}</NavbarContainer>;
  },

  NavbarIcon: ({ children }: Props) => (
    <NavbarIconContainer>{children}</NavbarIconContainer>
  ),
};
