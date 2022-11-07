import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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
  }
`;
