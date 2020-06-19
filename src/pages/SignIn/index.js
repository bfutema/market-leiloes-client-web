import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Button, NavigationContent } from './styles';

export default function index() {
  return (
    <Container>
      <h1>Já tenho uma conta</h1>
      <form>
        <Content>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Nome de usuário ou CPF/CNPJ"
              autoComplete="none"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Sua senha secreta"
            />
          </div>
          <Button type="submit">Login</Button>
        </Content>
      </form>
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
