import { Bell } from "../../Assets/Svgs/Icons/Bell";
import { Logo } from "../Logo/Logo";
import { TopbarContainer } from "./Topbar.styled";

export const Topbar = () => {
  return (
    <TopbarContainer>
      <Logo.Text />
      <Bell />
    </TopbarContainer>
  );
};
