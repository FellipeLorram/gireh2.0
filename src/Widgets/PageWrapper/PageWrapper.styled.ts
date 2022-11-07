import styled from "styled-components";

export const PageWrapperContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .icon {
    width: 24px;
    height: 24px;
  }

  main {
    align-self: stretch;
  }
`;
