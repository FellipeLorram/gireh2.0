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

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  main {
    width: 100%;
    padding: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    align-self: stretch;
  }
`;
