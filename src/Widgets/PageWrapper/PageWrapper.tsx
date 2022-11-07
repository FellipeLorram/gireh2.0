import React from "react";
import { Menu } from "../../Components/Menu/Menu";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Topbar } from "../../Components/Topbar/Topbar";
import { PageWrapperContainer } from "./PageWrapper.styled";

interface Props {
  children: React.ReactNode;
}
import { useMenuContextStore } from "../../Store/MenuContext";

const { Provider } = useMenuContextStore;

export const PageWrapper = ({ children }: Props) => {
  return (
    <Provider>
      <PageWrapperContainer>
        <Topbar />
        <main>{children}</main>
        <Navbar />
        <Menu />
      </PageWrapperContainer>
    </Provider>
  );
};
