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
  Action: () => void;
  iconText: string;
};

const NavbarItems: NavbarItems[] = [
  {
    Icon: Files,
    Action: () => console.log(""),
    iconText: "Vendas",
  },
  {
    Icon: ReportMedical,
    Action: () => console.log(""),
    iconText: "Consultas",
  },
  {
    Icon: People,
    Action: () => console.log(""),
    iconText: "Clientes",
  },
  {
    Icon: Dots,
    Action: () => console.log(""),
    iconText: "Mais",
  },
];

export const Navbar = () => {
  return (
    <NavbarContainer>
      {NavbarItems.map(({ Icon, Action, iconText }) => (
        <NavbarIcon onClick={() => Action()}>
          <Icon />
          <Text size="s">{iconText}</Text>
        </NavbarIcon>
      ))}
    </NavbarContainer>
  );
};
