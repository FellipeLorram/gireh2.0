import { ReactNode } from "react";
import { TextWrapper, TextWrapperProps } from "./Text.styled";

interface Props extends TextWrapperProps {
  children: ReactNode;
  className?: string;
}

export const Text = ({
  children,
  size = "m",
  type = "principal",
  className,
}: Props) => {
  return (
    <TextWrapper className={className} type={type} size={size}>
      {children}
    </TextWrapper>
  );
};
