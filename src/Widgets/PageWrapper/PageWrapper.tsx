import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PageWrapperContainer } from "./PageWrapper.styled";

interface Props {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return (
    <PageWrapperContainer>
      <Navbar />
    </PageWrapperContainer>
  );
};
