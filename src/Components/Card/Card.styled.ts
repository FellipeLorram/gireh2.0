import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: var(--gray-400);
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
