import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Topbar } from "../../Components/Topbar/Topbar";
import { PageWrapperContainer } from "./PageWrapper.styled";

interface Props {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return (
    <PageWrapperContainer>
      <Topbar />
      <main>
        
        {children}
      </main>
      <Navbar />
    </PageWrapperContainer>
  );
};
