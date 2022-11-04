import React, { LabelHTMLAttributes } from "react";
import { LabelWrapper } from "./Label.styled";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  text: String;
  children: React.ReactNode
}

export const Label = ({ text, children, ...props }: Props) => {
  return <LabelWrapper {...props}>
    <p>
    {text}
    </p>
    {children}
  </LabelWrapper>;
};
