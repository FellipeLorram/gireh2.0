import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};
