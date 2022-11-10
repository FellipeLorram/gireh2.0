import styled from "styled-components";

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 20px;
  width: 100%;
  background: var(--gray-700);
  position: relative;

  .right-side {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    position: relative;
  }
`;

export const DropDownBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 6;
  animation: FadeInBackground 0.2s ease-in-out;
`;

export const DropDown = styled.div`
  z-index: 7;
  position: absolute;
  top: 30px;
  right: 0;
  width: 200px;
  background: var(--gray-700);
  border-radius: var(--radius);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
  animation: NiceScale 0.2s ease-in-out;

  .row {
    padding: 16px;
  }
`;
