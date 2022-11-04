import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./Button.styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  action?: () => void;
  children: React.ReactNode;
}

export const Button = ({ children, action }: Props) => {
  return (
    <ButtonContainer onClick={() => action && action()}>
      {children}
    </ButtonContainer>
  );
};
