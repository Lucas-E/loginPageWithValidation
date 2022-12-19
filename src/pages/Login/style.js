import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #2148c0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
`;

export const Column = styled.div`
  height: 100%;
  width: 100%;

  padding: 20px;

  justify-content: center;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 640px) {
    width: 70%;
  }

  @media only screen and (min-width: 768px) {
    width: 60%;
  }

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }

  @media only screen and (min-width: 1280px) {
    width: 30%;
  }
`;

export const LoginContainer = styled.div`
  padding: 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  color: #fff;
  margin-bottom: 30px;
`;

export const TextForget = styled.p`
  font-weight: 700;
  color: white;
  font-size: 14px;
  margin-top: 10px;
  text-align: right;
`

export const TextError = styled.p`
  color:red;
  font-size: 12px;
`