import { Text } from "../Text/Text";
import { DropDown } from "./Topbar.styled";

export const TopbarDropdown = () => {
  return (
    <DropDown>
      <div className="row">
        <Text type="auxiliar" size="xs">
          Nova venda
        </Text>
      </div>
      <div className="row">
        <Text type="auxiliar" size="xs">
          Nova consulta
        </Text>
      </div>
      <div className="row">
        <Text type="auxiliar" size="xs">
          Novo cliente
        </Text>
      </div>
      <div className="row">
        <Text type="auxiliar" size="xs">
          Fila de consulta
        </Text> 
      </div>
    </DropDown>
  );
};
