import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 100%;
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
  cursor: pointer;
  border: 2px solid transparent;
  transition: all .2s ease-in-out;

  :hover, :focus {
    border-color: var(--main-color);

    .text {
      color: var(--main-color);
    }
  }

  .text {
    transition: all .2s ease-in-out;
    color: var(--gray-400)
  }
`;
