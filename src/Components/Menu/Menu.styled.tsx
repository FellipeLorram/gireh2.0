import styled from "styled-components";

interface MenuWrapperProps {
  menuOnScreen: boolean;
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: var(--gray-700);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: ${({ menuOnScreen }) => (menuOnScreen ? 0 : "100%")};
  z-index: 2;
  transition: all .2s ease-in-out;

  .header {
    padding: 20px;
    text-align: center;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
    padding: 20px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    svg{
      stroke: var(--gray-400);
    }
  }
`;
