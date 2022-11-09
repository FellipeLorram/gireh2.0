import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const SearchTypeContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-700);
  border-radius: var(--radius);
  color: var(--gray-400);
  align-self: stretch;
  padding: 10px;
  min-width: 60px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    border-color: var(--main-color);

    .text {
      color: var(--main-color);
    }
  }

  .text {
    transition: all 0.2s ease-in-out;
    color: var(--gray-400);
  }
`;

export const SearchModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.7);
  transition: all .2s ease-in-out;
  z-index: 5;
  animation: modalBackground .2s ease-in-out;

  .modal {
    width: 90%;
    max-width: 400px;
    border-radius: var(--radius);
    background: var(--gray-700);

    .header {
      width: 100%;
      max-width: 400px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 20px;
    }

    .body {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
      gap: 10px;
    }
  }

  @keyframes modalBackground {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }
`;

export const SelectOptionContainer = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  border-radius: var(--radius);
  background: var(--gray-900);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 2px solid
    ${({ selected }) => (selected ? "var(--main-color)" : "transparent")};

  .text {
    color: ${({ selected }) =>
      selected ? "var(--main-color)" : "var(--gray-400)"};
  }

  :hover {
    border-color: var(--main-color);
    .text {
      color: var(--main-color);
    }
  }
`;
