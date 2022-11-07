import { ArrowLeftCircle } from "../../Assets/Svgs/Icons/ArrowLeftCircle";
import { Logo } from "../Logo/Logo";
import { Text } from "../Text/Text";
import { MenuWrapper } from "./Menu.styled";

export const Menu = () => {
  return (
    <MenuWrapper>
      <div className="header">
        <Logo.Text />
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
        <ArrowLeftCircle />
      </div>
    </MenuWrapper>
  );
};
