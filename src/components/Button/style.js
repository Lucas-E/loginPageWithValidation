import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #ffffff;
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    color: #2148C0;
    border: none;
    margin-top: 20px;

    &:hover{
        background-color: #ffffff90;
        cursor: pointer;
    }

    &:active{
        background-color: #ffffff70;
    }

    &:disabled{
        background-color: darkgray;
        cursor:default;
    }

`