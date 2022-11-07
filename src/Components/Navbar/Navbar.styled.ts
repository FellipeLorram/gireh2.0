import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  background: var(--gray-700);
  z-index: 1;

`;

interface NavbarIconProps {
  Active?: boolean;
}

export const NavbarIcon = styled.div<NavbarIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 10px;

  .NavbarIcon__text {
    color: var(${({ Active }) => (Active ? "--gray-100" : "--gray-400")});
  }

  svg {
    stroke: var(${({ Active }) => (Active ? "--gray-100" : "--gray-400")});
  }
`;
