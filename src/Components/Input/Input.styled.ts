import styled from "styled-components";

interface InputIconProps {
  cursor?: "initial" | "pointer"
}

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--gray-700);
  border-radius: var(--radius);
  height: 50px;
  padding: 0 10px;
  border: 2px solid transparent;
  transition: all .2s ease-in-out;

  :hover, :has(input:focus) {
    border-color: var(--main-color);

    svg {
      stroke: #3399ff;
    }
  }
`;

export const InputComponent = styled.input`
  width: 100%;
  font-size: var(--font-size-m);
  color: var(--font-main-color);
  background: none;
  outline: none;
  padding: 8px 0;
  border: 0;
  color: var(--gray-400);
  border-radius: var(--radius);
  align-self: stretch;
`;

export const InputIcon = styled.span<InputIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding-right: 10px;
  
  svg {
    width: var(--font-size-m);
    height: var(--font-size-m);
    stroke: var(--font-main-color);
    transition: all .2s ease-in-out;
    cursor: ${props => props.cursor ? props.cursor : "initial"};
  }
`;
