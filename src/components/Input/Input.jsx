import React from "react";
import { InputText, InputContainer } from "./style";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
const Input = ({ leftIcon, control, name, ...rest }) => {
  return (
    <Fragment>
      <InputContainer>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
    </Fragment>
  );
};

export default Input;
