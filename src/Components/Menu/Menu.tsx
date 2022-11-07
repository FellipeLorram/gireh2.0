import { ArrowLeftCircle } from "../../Assets/Svgs/Icons/ArrowLeftCircle";
import { Logo } from "../Logo/Logo";
import { Text } from "../Text/Text";
import { MenuWrapper } from "./Menu.styled";

import { useStore } from "../../Store/MenuContext";

export const Menu = () => {
  const { open, closeMenu } = useStore();

  return (
    <MenuWrapper menuOnScreen={open}>
      <div className="header">
        <Logo.Svg />
      </div>

      <div className="body">
        <Text size="m">Fila de consulta</Text>
        <Text size="m">Armações</Text>
        <Text size="m">Lentes</Text>
        <Text size="m">Listagem de Lentes</Text>
        <Text size="m">Relatórios</Text>
        <Text size="m">Custos</Text>
      </div>

      <div className="footer">
        <ArrowLeftCircle onClick={closeMenu} />
      </div>
    </MenuWrapper>
  );
};
