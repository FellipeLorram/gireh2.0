import { memo, SVGAttributes } from "react";
import { Dots } from "../../Assets/Svgs/Icons/Dots";
import { Files } from "../../Assets/Svgs/Icons/Files";
import { People } from "../../Assets/Svgs/Icons/People";
import { ReportMedical } from "../../Assets/Svgs/Icons/ReportMedical";
import { Text } from "../Text/Text";

import { NavbarContainer, NavbarIcon } from "./Navbar.styled";

import { useMenuContextStore } from "../../Store/MenuContext";

const { useStore } = useMenuContextStore;

type NavbarItems = {
  Icon: (props: SVGAttributes<SVGSVGElement>) => JSX.Element;
  path: string;
  iconText: string;
};

const NavbarItems: NavbarItems[] = [
  {
    Icon: Files,
    path: "/sells",
    iconText: "Vendas",
  },
  {
    Icon: ReportMedical,
    path: "/appointments",
    iconText: "Consultas",
  },
  {
    Icon: People,
    path: "/customers",
    iconText: "Clientes",
  },
];

export const Navbar = memo(() => {
  const [, setOpen] = useStore((state) => state.open);

  return (
    <NavbarContainer>
      {NavbarItems.map(({ Icon, path, iconText }) => (
        <NavbarIcon key={path} onClick={() => console.log(path)}>
          <Icon />
          <Text className="NavbarIcon__text" size="s">
            {iconText}
          </Text>
        </NavbarIcon>
      ))}
      <NavbarIcon onClick={() => setOpen({ open: true })}>
        <Dots />
        <Text className="NavbarIcon__text" size="s">
          Mais
        </Text>
      </NavbarIcon>
    </NavbarContainer>
  );
});
