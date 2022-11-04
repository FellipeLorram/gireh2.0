import styled from "styled-components";

export interface TextWrapperProps {
  size?: 's' | 'm' | 'l';
  type?: 'principal' | 'auxiliar';
}

export const TextWrapper = styled.div<TextWrapperProps>`
  font-size: ${({ size }) => `var(--font-size-${size})`};
  color: ${({type}) => {
    return type === 'principal' ? 'var(--gray-100)' : 'var(--gray-400)'
  }};
`; 