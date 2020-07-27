import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Ink from 'react-ink';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { signInRequest } from '~/store/modules/auth/actions';

import { Input } from '~/components/Form';

import { Container, Content, Button, NavigationContent } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('Digite sua senha'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});

      const { email, password } = data;

      dispatch(signInRequest(email, password));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <h1>Já tenho uma conta</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Content>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="Seu email"
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Sua senha secreta"
            />
          </div>
          <Button type="submit">
            <Ink />
            Login
          </Button>
        </Content>
      </Form>
      <hr />
      <NavigationContent>
        <div>
          <span>Ainda não sou cadastrado</span>
          <Link to="/register">
            <Ink />
            Criar uma conta
          </Link>
        </div>
        <div>
          <span>Não consigo acessar minha conta</span>
          <Link to="/forgot_password">
            <Ink />
            Esqueci minha senha
          </Link>
        </div>
      </NavigationContent>
    </Container>
  );
}
