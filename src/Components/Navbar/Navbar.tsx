import { ReactNode, SVGAttributes } from "react";
import { Dots } from "../../Assets/Svgs/Icons/Dots";
import { Files } from "../../Assets/Svgs/Icons/Files";
import { People } from "../../Assets/Svgs/Icons/People";
import { ReportMedical } from "../../Assets/Svgs/Icons/ReportMedical";
import { Text } from "../Text/Text";

import { NavbarContainer, NavbarIcon } from "./Navbar.styled";

interface Props {
  children: ReactNode;
}

type NavbarItems = {
  Icon: (props: SVGAttributes<SVGSVGElement>) => JSX.Element;
  path: string;
  iconText: string;
};

const NavbarItems: NavbarItems[] = [
  {
    Icon: Files,
    path: "/",
    iconText: "Vendas",
  },
  {
    Icon: ReportMedical,
    path: "/",
    iconText: "Consultas",
  },
  {
    Icon: People,
    path: "/",
    iconText: "Clientes",
  },
];

export const Navbar = () => {
  return (
    <NavbarContainer>
      {NavbarItems.map(({ Icon, path, iconText }) => (
        <NavbarIcon onClick={() => console.log(path)}>
          <Icon />
          <Text className="NavbarIcon__text" size="s">
            {iconText}
          </Text>
        </NavbarIcon>
      ))}
      <NavbarIcon>
        <Dots />
        <Text className="NavbarIcon__text" size="s">
          Mais
        </Text>
      </NavbarIcon>
    </NavbarContainer>
  );
};
