import React, { InputHTMLAttributes } from "react";
import { InputWrapper, InputComponent, InputIcon } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface InputWrapperProps {
  children: React.ReactNode;
}

interface InputIconProps {
  cursor?: "initial" | "pointer";
  action?: () => void;
  children: React.ReactNode;
}

export const Input = {
  Wrapper: ({ children }: InputWrapperProps) => {
    return <InputWrapper>{children}</InputWrapper>;
  },

  Icon: ({ children, cursor, action }: InputIconProps) => {
    return (
      <InputIcon onClick={() => action && action()} cursor={cursor}>
        {children}
      </InputIcon>
    );
  },

  Input: (props: InputProps) => {
    return <InputComponent {...props} />;
  },
};
