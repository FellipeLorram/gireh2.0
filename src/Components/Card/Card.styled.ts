import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: var(--gray-400);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all .2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  :hover {
    border-color: var(--main-color);
  }
`;

export const Row = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 10px 15px;
  border-bottom: 1px solid var(--gray-700);
  color: var(--gray-700);
`;

export const CardText = styled.span`
  .card-text {
    font-weight: 700;
    color: var(--gray-700);
  }
`;
