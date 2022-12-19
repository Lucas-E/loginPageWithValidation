import React from "react";

import {
  Container,
  Row,
  Column,
  LoginContainer,
  IconContainer,
  TextForget,
  TextError
} from "./style";
import { Fragment } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
  login: yup.string().email('Email must be valid').required('Email is required'),
  password: yup.string().required('Password is required')
})

const Login = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <Container>
        <Row>
          <Column>
            <LoginContainer>
              <IconContainer>
                <ShoppingCartIcon sx={{ fontSize: "12rem" }} />
              </IconContainer>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="LOGIN" name="login" control={control} type="text"/>
                <TextError>{errors.login? errors.login.message:null}</TextError>
                <Input placeholder="PASSWORD" type="password" name="password" control={control} />
                <TextError>{errors.password? errors.password.message:null}</TextError>
                <Button type="submit" disabled={!isValid}>LOGIN</Button>
              </form>
              
              <TextForget>Forgot Password?</TextForget>
            </LoginContainer>
          </Column>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
