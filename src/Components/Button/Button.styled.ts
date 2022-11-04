import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main-color);
  cursor: pointer;
  width: 100%;
  border-radius: var(--radius);
  height: 50px;
  font-size: var(--font-size-m);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gray-100);
  transition: all .2s ease-in-out;

  :hover {
    background: var(--main-color-light);
  }
`;