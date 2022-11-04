import styled from "styled-components";

export const LoginPageWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
  .text {
    text-align: center;
    margin-top: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  gap: 24px;
  margin-top: 24px;
`;
