import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  margin: 10px 0;
  border-width: thin;
`;

export const InputText = styled.input`
  color:white;
  font-size: 16px;
  padding: 15px;
  width: 100%;
  background-color: transparent;
  border: none;
  font-weight: lighter;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  :-ms-input-placeholder {
     color: white;
  }

`;
