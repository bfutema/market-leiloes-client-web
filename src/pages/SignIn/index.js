import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Content, Button, NavigationContent } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('Digite sua senha'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <h1>Já tenho uma conta</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Content>
          <div className="item">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="Seu email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Sua senha secreta"
            />
          </div>
          <Button type="submit">Login</Button>
        </Content>
      </Form>
      <hr />
      <NavigationContent>
        <div>
          <span>Ainda não sou cadastrado</span>
          <Link to="/register">Criar uma conta</Link>
        </div>
        <div>
          <span>Não consigo acessar minha conta</span>
          <Link to="/">Esqueci minha senha</Link>
        </div>
      </NavigationContent>
    </Container>
  );
}
